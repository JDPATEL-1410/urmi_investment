import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { FaInfoCircle, FaBullseye, FaGraduationCap, FaHome, FaCar, FaRing } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ActionButtons from '../components/ActionButtons';
import toolsHeader from '../assets/tools-header.png';
import { calculateGoalSIP, formatCurrency, generateShareURL, copyToClipboard, parseURLParams } from '../utils/calculatorUtils';
import { generateCalculatorPDF } from '../utils/pdfGenerator';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);

interface GoalPreset {
    name: string;
    icon: any;
    amount: number;
    years: number;
    rate: number;
}

const GoalCalculator = () => {
    const [goalAmount, setGoalAmount] = useState(1000000);
    const [years, setYears] = useState(5);
    const [rate, setRate] = useState(12);
    const [selectedGoal, setSelectedGoal] = useState<string>('');

    // Load from URL parameters
    useEffect(() => {
        const params = parseURLParams();
        if (params.goal) setGoalAmount(Number(params.goal));
        if (params.years) setYears(Number(params.years));
        if (params.rate) setRate(Number(params.rate));
    }, []);

    const monthlySIP = calculateGoalSIP(goalAmount, years, rate);
    const totalInvestment = monthlySIP * years * 12;
    const growth = goalAmount - totalInvestment;

    // Generate year-by-year breakdown
    const generateBreakdown = () => {
        const breakdown = [];
        const monthlyRate = rate / 12 / 100;

        for (let year = 1; year <= years; year++) {
            const months = year * 12;
            const accumulated = monthlySIP * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
            const invested = monthlySIP * months;

            breakdown.push({
                year,
                invested: Math.round(invested),
                accumulated: Math.round(accumulated),
                growth: Math.round(accumulated - invested)
            });
        }

        return breakdown;
    };

    const breakdown = generateBreakdown();

    const goalPresets: GoalPreset[] = [
        { name: 'Education', icon: FaGraduationCap, amount: 2000000, years: 10, rate: 12 },
        { name: 'Home Down Payment', icon: FaHome, amount: 1500000, years: 7, rate: 12 },
        { name: 'Car Purchase', icon: FaCar, amount: 800000, years: 3, rate: 10 },
        { name: 'Wedding', icon: FaRing, amount: 1500000, years: 5, rate: 12 }
    ];

    const applyPreset = (preset: GoalPreset) => {
        setGoalAmount(preset.amount);
        setYears(preset.years);
        setRate(preset.rate);
        setSelectedGoal(preset.name);
    };

    const doughnutData = {
        labels: ['Your Investment', 'Growth'],
        datasets: [{
            data: [totalInvestment, growth],
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

    const lineChartData = {
        labels: breakdown.map(b => `Year ${b.year}`),
        datasets: [
            {
                label: 'Investment',
                data: breakdown.map(b => b.invested),
                borderColor: 'rgb(229, 231, 235)',
                backgroundColor: 'rgba(229, 231, 235, 0.5)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Accumulated Value',
                data: breakdown.map(b => b.accumulated),
                borderColor: 'rgb(30, 58, 138)',
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value: any) {
                        return '₹' + (value / 100000).toFixed(0) + 'L';
                    }
                }
            }
        }
    };

    const handleDownloadPDF = () => {
        generateCalculatorPDF({
            title: 'Goal Planning Report',
            subtitle: selectedGoal ? `${selectedGoal} Goal` : 'Financial Goal Planning',
            calculatorType: 'Goal',
            inputs: [
                { label: 'Goal Amount', value: formatCurrency(goalAmount) },
                { label: 'Time Period', value: `${years} Years` },
                { label: 'Expected Return', value: `${rate}%` }
            ],
            results: [
                { label: 'Monthly SIP Required', value: formatCurrency(monthlySIP), highlight: true },
                { label: 'Total Investment', value: formatCurrency(totalInvestment) },
                { label: 'Expected Growth', value: formatCurrency(growth) },
                { label: 'Goal Amount', value: formatCurrency(goalAmount) }
            ],
            breakdown: {
                headers: ['Year', 'Invested', 'Growth', 'Total Value'],
                rows: breakdown.map(b => [
                    `Year ${b.year}`,
                    b.invested,
                    b.growth,
                    b.accumulated
                ])
            }
        });
    };

    const handleShare = async () => {
        const shareURL = generateShareURL({
            goal: goalAmount,
            years: years,
            rate: rate
        });
        await copyToClipboard(shareURL);
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader
                title="Goal Planning Calculator"
                subtitle="Achieve your financial dreams with systematic planning"
                image={toolsHeader}
                badge="Planning Tool"
            />

            <div className="section-container py-16">
                {/* Goal Presets */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">Choose Your Goal</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {goalPresets.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => applyPreset(preset)}
                                className={`p-6 rounded-xl border-2 transition-all duration-200 ${selectedGoal === preset.name
                                        ? 'border-primary bg-primary text-white shadow-lg scale-105'
                                        : 'border-neutral-200 bg-white hover:border-primary hover:shadow-md'
                                    }`}
                            >
                                <preset.icon className="text-3xl mx-auto mb-3" />
                                <p className="font-semibold text-sm">{preset.name}</p>
                                <p className="text-xs opacity-75 mt-1">{formatCurrency(preset.amount)}</p>
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 card"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <FaBullseye className="text-primary text-2xl" />
                            <h2 className="text-2xl font-bold text-neutral-900">Goal Parameters</h2>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Goal Amount
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Target amount you want to achieve
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    {formatCurrency(goalAmount)}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="100000"
                                max="10000000"
                                step="50000"
                                value={goalAmount}
                                onChange={e => {
                                    setGoalAmount(Number(e.target.value));
                                    setSelectedGoal('');
                                }}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>₹1L</span>
                                <span>₹1 Cr</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Time Period
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Years available to achieve your goal
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    {years} Years
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={years}
                                onChange={e => {
                                    setYears(Number(e.target.value));
                                    setSelectedGoal('');
                                }}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>1 Year</span>
                                <span>30 Years</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Expected Return
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Expected annual return from your investments
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    {rate} %
                                </span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="20"
                                step="0.5"
                                value={rate}
                                onChange={e => {
                                    setRate(Number(e.target.value));
                                    setSelectedGoal('');
                                }}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>5%</span>
                                <span>20%</span>
                            </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="pt-6 border-t border-neutral-200">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-neutral-600">Investment Progress</span>
                                <span className="font-semibold text-primary">
                                    {((totalInvestment / goalAmount) * 100).toFixed(1)}%
                                </span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(totalInvestment / goalAmount) * 100}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="bg-gradient-to-r from-primary to-primary-dark h-3 rounded-full"
                                />
                            </div>
                            <p className="text-xs text-neutral-500 mt-2">
                                Your investment will be {((totalInvestment / goalAmount) * 100).toFixed(0)}% of the goal amount
                            </p>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Main Result */}
                        <div className="card bg-gradient-to-br from-primary to-primary-dark text-white">
                            <h3 className="text-lg font-medium mb-6 opacity-90">Monthly Investment Required</h3>
                            <div className="text-center">
                                <p className="text-5xl md:text-6xl font-bold mb-4">
                                    {formatCurrency(monthlySIP)}
                                </p>
                                <p className="text-sm opacity-75">
                                    Invest this amount monthly to reach your goal of {formatCurrency(goalAmount)} in {years} years
                                </p>
                            </div>
                        </div>

                        {/* Doughnut Chart */}
                        <div className="card">
                            <div className="relative">
                                <Doughnut data={doughnutData} options={doughnutOptions} />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <p className="text-xs text-neutral-500 mb-1">Goal Amount</p>
                                        <p className="text-lg font-bold text-neutral-900">
                                            {formatCurrency(goalAmount)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-neutral-50 rounded-xl">
                                <p className="text-xs text-neutral-600 mb-1">Total Investment</p>
                                <p className="text-xl font-bold text-neutral-900">
                                    {formatCurrency(totalInvestment)}
                                </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-xl">
                                <p className="text-xs text-neutral-600 mb-1">Expected Growth</p>
                                <p className="text-xl font-bold text-green-600">
                                    {formatCurrency(growth)}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Growth Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 card"
                >
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">Goal Achievement Progress</h3>
                    <div className="h-80">
                        <Line data={lineChartData} options={lineChartOptions} />
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
                        <strong>Disclaimer:</strong> This calculator provides estimates based on the inputs provided. Actual returns may vary depending on market conditions. Start investing early to benefit from the power of compounding.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default GoalCalculator;
