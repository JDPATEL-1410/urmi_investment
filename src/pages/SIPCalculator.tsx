import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaInfoCircle, FaChartLine } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { calculateSIPWithBreakdown, formatCurrency, generateShareURL, copyToClipboard, parseURLParams } from '../utils/calculatorUtils';
import { generateCalculatorPDF } from '../utils/pdfGenerator';
import BreakdownTable from '../components/BreakdownTable';
import ActionButtons from '../components/ActionButtons';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);
    const [showBreakdown, setShowBreakdown] = useState(false);

    // Load from URL parameters if available
    useEffect(() => {
        const params = parseURLParams();
        if (params.monthly) setMonthlyInvestment(Number(params.monthly));
        if (params.return) setExpectedReturn(Number(params.return));
        if (params.years) setTimePeriod(Number(params.years));
    }, []);

    const { result, breakdown } = calculateSIPWithBreakdown(monthlyInvestment, expectedReturn, timePeriod);

    // Chart data
    const chartData = {
        labels: breakdown.map(b => `Year ${b.year}`),
        datasets: [
            {
                label: 'Total Investment',
                data: breakdown.map(b => b.investment),
                borderColor: 'rgb(229, 231, 235)',
                backgroundColor: 'rgba(229, 231, 235, 0.5)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Total Value',
                data: breakdown.map(b => b.total),
                borderColor: 'rgb(30, 58, 138)',
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += formatCurrency(context.parsed.y);
                        return label;
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
            title: 'SIP Calculator Report',
            subtitle: 'Systematic Investment Plan Analysis',
            calculatorType: 'SIP',
            inputs: [
                { label: 'Monthly Investment', value: formatCurrency(monthlyInvestment) },
                { label: 'Expected Return Rate (p.a.)', value: `${expectedReturn}%` },
                { label: 'Investment Period', value: `${timePeriod} Years` }
            ],
            results: [
                { label: 'Total Investment', value: formatCurrency(result.invested) },
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
            monthly: monthlyInvestment,
            return: expectedReturn,
            years: timePeriod
        });
        await copyToClipboard(shareURL);
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-4">
                            Investment Calculator
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            SIP Calculator
                        </h1>
                        <p className="text-xl text-neutral-100">
                            Calculate your Systematic Investment Plan returns and plan your financial future
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator */}
            <section className="py-16 md:py-24">
                <div className="section-container max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Input Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card space-y-8"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <FaChartLine className="text-primary text-2xl" />
                                <h2 className="text-2xl font-bold text-neutral-900">Investment Details</h2>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                                        Monthly Investment
                                        <div className="group relative">
                                            <FaInfoCircle className="text-neutral-400 cursor-help" />
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                                Amount you plan to invest every month through SIP
                                            </div>
                                        </div>
                                    </label>
                                    <span className="text-sm text-neutral-500">₹500 - ₹1,00,000</span>
                                </div>
                                <input
                                    type="range"
                                    min="500"
                                    max="100000"
                                    step="500"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="mt-3 p-4 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-xl border-2 border-primary/20">
                                    <div className="text-3xl font-bold text-primary">
                                        {formatCurrency(monthlyInvestment)}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                                        Expected Return Rate (% p.a.)
                                        <div className="group relative">
                                            <FaInfoCircle className="text-neutral-400 cursor-help" />
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                                Expected annual returns from your investment. Equity funds typically range from 10-15%
                                            </div>
                                        </div>
                                    </label>
                                    <span className="text-sm text-neutral-500">1% - 30%</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="0.5"
                                    value={expectedReturn}
                                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="mt-3 p-4 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-xl border-2 border-primary/20">
                                    <div className="text-3xl font-bold text-primary">
                                        {expectedReturn}%
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                                        Time Period (Years)
                                        <div className="group relative">
                                            <FaInfoCircle className="text-neutral-400 cursor-help" />
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                                Duration for which you plan to stay invested. Longer duration helps in wealth creation
                                            </div>
                                        </div>
                                    </label>
                                    <span className="text-sm text-neutral-500">1 - 40 Years</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    step="1"
                                    value={timePeriod}
                                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="mt-3 p-4 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-xl border-2 border-primary/20">
                                    <div className="text-3xl font-bold text-primary">
                                        {timePeriod} Years
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Result Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="card bg-gradient-to-br from-primary to-primary-dark text-white">
                                <h3 className="text-lg font-medium mb-6 opacity-90">Estimated Returns</h3>
                                <div className="space-y-6">
                                    <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <div className="text-sm opacity-90 mb-1">Total Investment</div>
                                        <div className="text-2xl md:text-3xl font-bold">
                                            {formatCurrency(result.invested)}
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <div className="text-sm opacity-90 mb-1">Estimated Returns</div>
                                        <div className="text-2xl md:text-3xl font-bold text-accent-green">
                                            {formatCurrency(result.returns)}
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm border-2 border-white/30">
                                        <div className="text-sm opacity-90 mb-1">Total Value</div>
                                        <div className="text-3xl md:text-4xl font-bold">
                                            {formatCurrency(result.total)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-neutral-900 mb-4">Investment Breakdown</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-neutral-600">Invested Amount</span>
                                            <span className="font-semibold text-neutral-900">
                                                {((result.invested / result.total) * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(result.invested / result.total) * 100}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="bg-gradient-to-r from-neutral-400 to-neutral-600 h-3 rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-neutral-600">Estimated Returns</span>
                                            <span className="font-semibold text-accent-green">
                                                {((result.returns / result.total) * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(result.returns / result.total) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                                className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Growth Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-12 card"
                    >
                        <h3 className="text-xl font-bold text-neutral-900 mb-6">Investment Growth Over Time</h3>
                        <div className="h-80">
                            <Line data={chartData} options={chartOptions} />
                        </div>
                    </motion.div>

                    {/* Breakdown Table */}
                    <div className="mt-8">
                        <button
                            onClick={() => setShowBreakdown(!showBreakdown)}
                            className="w-full md:w-auto px-6 py-3 bg-white border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                        >
                            {showBreakdown ? 'Hide' : 'Show'} Detailed Breakdown
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
                        transition={{ delay: 0.5 }}
                        className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl"
                    >
                        <p className="text-sm text-neutral-700">
                            <strong>Disclaimer:</strong> This calculator provides an estimate based on the inputs provided. Actual returns may vary depending on market conditions. Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SIPCalculator;
