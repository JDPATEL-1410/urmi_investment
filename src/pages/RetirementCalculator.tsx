import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { FaInfoCircle, FaUmbrella } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ActionButtons from '../components/ActionButtons';
import toolsHeader from '../assets/tools-header.png';
import { formatCurrency, generateShareURL, copyToClipboard, parseURLParams } from '../utils/calculatorUtils';
import { generateCalculatorPDF } from '../utils/pdfGenerator';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
    const [inflation, setInflation] = useState(6);
    const [preRetirementReturn, setPreRetirementReturn] = useState(12);
    const [postRetirementReturn, setPostRetirementReturn] = useState(8);
    const [lifeExpectancy, setLifeExpectancy] = useState(80);

    // Load from URL parameters
    useEffect(() => {
        const params = parseURLParams();
        if (params.currentAge) setCurrentAge(Number(params.currentAge));
        if (params.retirementAge) setRetirementAge(Number(params.retirementAge));
        if (params.expenses) setMonthlyExpenses(Number(params.expenses));
    }, []);

    const calculateRetirement = () => {
        const yearsToRetirement = retirementAge - currentAge;
        const yearsInRetirement = lifeExpectancy - retirementAge;

        // Future monthly expenses at retirement
        const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetirement);

        // Corpus needed at retirement (considering post-retirement returns and inflation)
        const realReturn = ((1 + postRetirementReturn / 100) / (1 + inflation / 100)) - 1;
        const monthlyRealReturn = realReturn / 12;

        let corpusNeeded = 0;
        if (monthlyRealReturn > 0) {
            corpusNeeded = futureMonthlyExpenses * ((1 - Math.pow(1 + monthlyRealReturn, -yearsInRetirement * 12)) / monthlyRealReturn);
        } else {
            corpusNeeded = futureMonthlyExpenses * yearsInRetirement * 12;
        }

        // Monthly SIP needed
        const monthlyRate = preRetirementReturn / 12 / 100;
        const months = yearsToRetirement * 12;
        const monthlySIP = (corpusNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

        // Total investment
        const totalInvestment = monthlySIP * months;

        return {
            corpusNeeded: Math.round(corpusNeeded),
            monthlySIP: Math.round(monthlySIP),
            totalInvestment: Math.round(totalInvestment),
            futureMonthlyExpenses: Math.round(futureMonthlyExpenses),
            yearsToRetirement,
            yearsInRetirement
        };
    };

    const result = calculateRetirement();

    const doughnutData = {
        labels: ['Your Investment', 'Investment Growth'],
        datasets: [{
            data: [result.totalInvestment, result.corpusNeeded - result.totalInvestment],
            backgroundColor: ['#e5e7eb', '#1e3a8a'],
            borderWidth: 0,
        }],
    };

    const doughnutOptions = {
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: { family: "'Inter', sans-serif" },
                },
            },
        },
    };

    // Generate milestone breakdown
    const milestones = [
        { age: currentAge + 10, label: `Age ${currentAge + 10}` },
        { age: currentAge + 20, label: `Age ${currentAge + 20}` },
        { age: retirementAge - 5, label: `5 Years Before Retirement` },
        { age: retirementAge, label: `Retirement Age` }
    ].filter(m => m.age <= retirementAge && m.age > currentAge);

    const milestoneData = milestones.map(m => {
        const years = m.age - currentAge;
        const months = years * 12;
        const monthlyRate = preRetirementReturn / 12 / 100;
        const accumulated = result.monthlySIP * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        return {
            label: m.label,
            value: Math.round(accumulated)
        };
    });

    const barChartData = {
        labels: milestoneData.map(m => m.label),
        datasets: [{
            label: 'Accumulated Corpus',
            data: milestoneData.map(m => m.value),
            backgroundColor: '#1e3a8a',
        }]
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return formatCurrency(context.parsed.y);
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value: any) {
                        return '₹' + (value / 10000000).toFixed(1) + 'Cr';
                    }
                }
            }
        }
    };

    const handleDownloadPDF = () => {
        generateCalculatorPDF({
            title: 'Retirement Planning Report',
            subtitle: 'Secure Your Golden Years',
            calculatorType: 'Retirement',
            inputs: [
                { label: 'Current Age', value: `${currentAge} years` },
                { label: 'Retirement Age', value: `${retirementAge} years` },
                { label: 'Current Monthly Expenses', value: formatCurrency(monthlyExpenses) },
                { label: 'Inflation Rate', value: `${inflation}%` },
                { label: 'Pre-Retirement Return', value: `${preRetirementReturn}%` },
                { label: 'Post-Retirement Return', value: `${postRetirementReturn}%` },
                { label: 'Life Expectancy', value: `${lifeExpectancy} years` }
            ],
            results: [
                { label: 'Retirement Corpus Needed', value: formatCurrency(result.corpusNeeded), highlight: true },
                { label: 'Monthly SIP Required', value: formatCurrency(result.monthlySIP), highlight: true },
                { label: 'Total Investment', value: formatCurrency(result.totalInvestment) },
                { label: 'Future Monthly Expenses', value: formatCurrency(result.futureMonthlyExpenses) }
            ],
            breakdown: {
                headers: ['Milestone', 'Accumulated Corpus'],
                rows: milestoneData.map(m => [m.label, m.value])
            }
        });
    };

    const handleShare = async () => {
        const shareURL = generateShareURL({
            currentAge,
            retirementAge,
            expenses: monthlyExpenses
        });
        await copyToClipboard(shareURL);
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader
                title="Retirement Calculator"
                subtitle="Plan your retirement corpus and secure your future"
                image={toolsHeader}
                badge="Planning Tool"
            />

            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6 card"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <FaUmbrella className="text-primary text-2xl" />
                            <h2 className="text-2xl font-bold text-neutral-900">Retirement Planning</h2>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Current Age
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Your current age
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {currentAge} years
                                </span>
                            </div>
                            <input type="range" min="18" max="60" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Retirement Age
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Age at which you plan to retire
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {retirementAge} years
                                </span>
                            </div>
                            <input type="range" min="40" max="70" value={retirementAge} onChange={e => setRetirementAge(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Current Monthly Expenses
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Your current monthly living expenses
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {formatCurrency(monthlyExpenses)}
                                </span>
                            </div>
                            <input type="range" min="10000" max="200000" step="5000" value={monthlyExpenses} onChange={e => setMonthlyExpenses(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Inflation Rate
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Expected annual inflation rate (typically 5-7%)
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {inflation} %
                                </span>
                            </div>
                            <input type="range" min="4" max="10" value={inflation} onChange={e => setInflation(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Pre-Retirement Return
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Expected returns before retirement (equity-heavy portfolio)
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {preRetirementReturn} %
                                </span>
                            </div>
                            <input type="range" min="8" max="15" step="0.5" value={preRetirementReturn} onChange={e => setPreRetirementReturn(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Post-Retirement Return
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Expected returns after retirement (conservative portfolio)
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {postRetirementReturn} %
                                </span>
                            </div>
                            <input type="range" min="6" max="12" step="0.5" value={postRetirementReturn} onChange={e => setPostRetirementReturn(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Life Expectancy
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Expected lifespan (average in India: 70-80 years)
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {lifeExpectancy} years
                                </span>
                            </div>
                            <input type="range" min="65" max="100" value={lifeExpectancy} onChange={e => setLifeExpectancy(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Main Result Card */}
                        <div className="card bg-gradient-to-br from-primary to-primary-dark text-white">
                            <h3 className="text-lg font-medium mb-6 opacity-90">Retirement Planning Summary</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                    <p className="text-sm opacity-90 mb-1">Corpus Needed at Retirement</p>
                                    <p className="text-3xl font-bold">{formatCurrency(result.corpusNeeded)}</p>
                                </div>
                                <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm border-2 border-white/30">
                                    <p className="text-sm opacity-90 mb-1">Monthly SIP Required</p>
                                    <p className="text-3xl font-bold text-accent-green">{formatCurrency(result.monthlySIP)}</p>
                                    <p className="text-xs opacity-75 mt-2">Start investing this amount monthly</p>
                                </div>
                            </div>
                        </div>

                        {/* Doughnut Chart */}
                        <div className="card">
                            <div className="relative">
                                <Doughnut data={doughnutData} options={doughnutOptions} />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <p className="text-xs text-neutral-500 mb-1">Total Corpus</p>
                                        <p className="text-lg font-bold text-neutral-900">
                                            {formatCurrency(result.corpusNeeded)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 rounded-xl">
                                <p className="text-xs text-neutral-600 mb-1">Years to Retirement</p>
                                <p className="text-2xl font-bold text-primary">{result.yearsToRetirement}</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-xl">
                                <p className="text-xs text-neutral-600 mb-1">Retirement Duration</p>
                                <p className="text-2xl font-bold text-green-600">{result.yearsInRetirement} years</p>
                            </div>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                            <p className="text-xs text-neutral-600 mb-1">Future Monthly Expenses</p>
                            <p className="text-xl font-bold text-orange-600">{formatCurrency(result.futureMonthlyExpenses)}</p>
                            <p className="text-xs text-neutral-500 mt-1">At retirement (adjusted for inflation)</p>
                        </div>
                    </motion.div>
                </div>

                {/* Milestone Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 card"
                >
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">Corpus Accumulation Milestones</h3>
                    <div className="h-80">
                        <Bar data={barChartData} options={barChartOptions} />
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <ActionButtons
                    onDownloadPDF={handleDownloadPDF}
                    onShare={handleShare}
                    className="mt-8"
                />

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl"
                >
                    <p className="text-sm text-neutral-700">
                        <strong>Disclaimer:</strong> This calculator provides estimates for retirement planning. Actual corpus needed may vary based on lifestyle, medical expenses, and inflation. Consult with a certified financial planner for personalized retirement planning.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default RetirementCalculator;
