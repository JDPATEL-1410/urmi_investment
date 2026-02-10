import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { FaInfoCircle, FaChartPie } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import BreakdownTable from '../components/BreakdownTable';
import ActionButtons from '../components/ActionButtons';
import toolsHeader from '../assets/tools-header.png';
import { calculateLumpsumWithBreakdown, formatCurrency, generateShareURL, copyToClipboard, parseURLParams } from '../utils/calculatorUtils';
import { generateCalculatorPDF } from '../utils/pdfGenerator';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);

const LumpsumCalculator = () => {
    const [investment, setInvestment] = useState(100000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);
    const [showBreakdown, setShowBreakdown] = useState(false);

    // Load from URL parameters
    useEffect(() => {
        const params = parseURLParams();
        if (params.amount) setInvestment(Number(params.amount));
        if (params.rate) setRate(Number(params.rate));
        if (params.years) setYears(Number(params.years));
    }, []);

    const { result, breakdown } = calculateLumpsumWithBreakdown(investment, rate, years);

    const doughnutData = {
        labels: ['Invested Amount', 'Est. Returns'],
        datasets: [
            {
                data: [result.invested, result.returns],
                backgroundColor: ['#e5e7eb', '#1e3a8a'],
                borderWidth: 0,
                hoverOffset: 4,
            },
        ],
    };

    const doughnutOptions = {
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        family: "'Inter', sans-serif",
                    },
                },
            },
        },
    };

    const lineChartData = {
        labels: breakdown.map(b => `Year ${b.year}`),
        datasets: [
            {
                label: 'Investment Value',
                data: breakdown.map(b => b.total),
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
                display: false
            },
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
            title: 'Lumpsum Investment Report',
            subtitle: 'One-Time Investment Analysis',
            calculatorType: 'Lumpsum',
            inputs: [
                { label: 'Investment Amount', value: formatCurrency(investment) },
                { label: 'Expected Return Rate (p.a.)', value: `${rate}%` },
                { label: 'Investment Period', value: `${years} Years` }
            ],
            results: [
                { label: 'Invested Amount', value: formatCurrency(result.invested) },
                { label: 'Estimated Returns', value: formatCurrency(result.returns) },
                { label: 'Total Value', value: formatCurrency(result.total), highlight: true }
            ],
            breakdown: {
                headers: ['Year', 'Invested Amount', 'Returns', 'Total Value'],
                rows: breakdown.map(b => [
                    `Year ${b.year}`,
                    Math.round(b.investment),
                    Math.round(b.returns),
                    Math.round(b.total)
                ])
            }
        });
    };

    const handleShare = async () => {
        const shareURL = generateShareURL({
            amount: investment,
            rate: rate,
            years: years
        });
        await copyToClipboard(shareURL);
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader
                title="Lumpsum Calculator"
                subtitle="Calculate the future value of your one-time investment"
                image={toolsHeader}
                badge="Investment Tool"
            />

            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 card"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <FaChartPie className="text-primary text-2xl" />
                            <h2 className="text-2xl font-bold text-neutral-900">Investment Parameters</h2>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Total Investment
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            One-time investment amount you want to invest
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    {formatCurrency(investment)}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="5000"
                                max="10000000"
                                step="5000"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>₹5,000</span>
                                <span>₹1 Cr</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Expected Return Rate (p.a)
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Expected annual return rate. Historical equity returns: 10-15%
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    {rate} %
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="0.5"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>1%</span>
                                <span>30%</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Time Period
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Investment duration. Longer periods benefit from compounding
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
                                max="40"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>1 Year</span>
                                <span>40 Years</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center justify-center space-y-8"
                    >
                        <div className="w-full max-w-md">
                            <div className="relative">
                                <Doughnut data={doughnutData} options={doughnutOptions} />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <p className="text-xs text-neutral-500 mb-1">Total Value</p>
                                        <p className="text-xl md:text-2xl font-bold text-neutral-900">
                                            {formatCurrency(result.total)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl shadow-md"
                            >
                                <p className="text-sm text-neutral-500 mb-2">Invested Amount</p>
                                <p className="text-xl font-bold text-neutral-900">
                                    {formatCurrency(result.invested)}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl shadow-md"
                            >
                                <p className="text-sm text-neutral-500 mb-2">Est. Returns</p>
                                <p className="text-xl font-bold text-primary">
                                    {formatCurrency(result.returns)}
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full p-6 bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-lg">
                            <p className="text-sm opacity-90 mb-2">Wealth Multiplier</p>
                            <p className="text-3xl font-bold">
                                {(result.total / result.invested).toFixed(2)}x
                            </p>
                            <p className="text-xs opacity-75 mt-2">
                                Your money will grow {(result.total / result.invested).toFixed(2)} times in {years} years
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Growth Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 card"
                >
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">Investment Growth Projection</h3>
                    <div className="h-80">
                        <Line data={lineChartData} options={lineChartOptions} />
                    </div>
                </motion.div>

                {/* Breakdown Table */}
                <div className="mt-8">
                    <button
                        onClick={() => setShowBreakdown(!showBreakdown)}
                        className="w-full md:w-auto px-6 py-3 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                    >
                        {showBreakdown ? 'Hide' : 'Show'} Year-by-Year Growth
                    </button>

                    {showBreakdown && (
                        <BreakdownTable
                            headers={['Year', 'Invested Amount', 'Returns', 'Total Value']}
                            rows={breakdown.map(b => [
                                `Year ${b.year}`,
                                Math.round(b.investment),
                                Math.round(b.returns),
                                Math.round(b.total)
                            ])}
                        />
                    )}
                </div>

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
                    transition={{ delay: 0.6 }}
                    className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl"
                >
                    <p className="text-sm text-neutral-700">
                        <strong>Disclaimer:</strong> This calculator provides estimates based on the inputs provided. Actual returns may vary depending on market conditions. Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default LumpsumCalculator;
