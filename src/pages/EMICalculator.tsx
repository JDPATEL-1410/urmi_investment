import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { FaInfoCircle, FaHome, FaCar } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ActionButtons from '../components/ActionButtons';
import toolsHeader from '../assets/tools-header.png';
import { calculateEMI, formatCurrency, generateShareURL, copyToClipboard, parseURLParams } from '../utils/calculatorUtils';
import { generateCalculatorPDF } from '../utils/pdfGenerator';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(15);

    // Load from URL parameters
    useEffect(() => {
        const params = parseURLParams();
        if (params.loan) setLoanAmount(Number(params.loan));
        if (params.rate) setRate(Number(params.rate));
        if (params.tenure) setTenure(Number(params.tenure));
    }, []);

    const result = calculateEMI(loanAmount, rate, tenure);

    // Generate year-by-year breakdown
    const generateBreakdown = () => {
        const breakdown = [];
        let remainingPrincipal = loanAmount;
        const monthlyRate = rate / 12 / 100;

        for (let year = 1; year <= tenure; year++) {
            let yearlyPrincipal = 0;
            let yearlyInterest = 0;

            for (let month = 1; month <= 12; month++) {
                const interest = remainingPrincipal * monthlyRate;
                const principal = result.monthlyEMI - interest;
                yearlyPrincipal += principal;
                yearlyInterest += interest;
                remainingPrincipal -= principal;
            }

            breakdown.push({
                year,
                principal: Math.round(yearlyPrincipal),
                interest: Math.round(yearlyInterest),
                remaining: Math.max(0, Math.round(remainingPrincipal))
            });
        }

        return breakdown;
    };

    const breakdown = generateBreakdown();

    const doughnutData = {
        labels: ['Principal Amount', 'Total Interest'],
        datasets: [
            {
                data: [loanAmount, result.totalInterest],
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
                    font: { family: "'Inter', sans-serif" },
                },
            },
        },
    };

    const barChartData = {
        labels: breakdown.map(b => `Y${b.year}`),
        datasets: [
            {
                label: 'Principal',
                data: breakdown.map(b => b.principal),
                backgroundColor: '#e5e7eb',
            },
            {
                label: 'Interest',
                data: breakdown.map(b => b.interest),
                backgroundColor: '#1e3a8a',
            }
        ]
    };

    const barChartOptions = {
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
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                ticks: {
                    callback: function (value: any) {
                        return '₹' + (value / 1000).toFixed(0) + 'K';
                    }
                }
            }
        }
    };

    const handleDownloadPDF = () => {
        generateCalculatorPDF({
            title: 'EMI Calculator Report',
            subtitle: 'Loan Repayment Analysis',
            calculatorType: 'EMI',
            inputs: [
                { label: 'Loan Amount', value: formatCurrency(loanAmount) },
                { label: 'Interest Rate (p.a.)', value: `${rate}%` },
                { label: 'Loan Tenure', value: `${tenure} Years` }
            ],
            results: [
                { label: 'Monthly EMI', value: formatCurrency(result.monthlyEMI), highlight: true },
                { label: 'Principal Amount', value: formatCurrency(loanAmount) },
                { label: 'Total Interest', value: formatCurrency(result.totalInterest) },
                { label: 'Total Amount Payable', value: formatCurrency(result.totalAmount) }
            ],
            breakdown: {
                headers: ['Year', 'Principal Paid', 'Interest Paid', 'Balance'],
                rows: breakdown.map(b => [
                    `Year ${b.year}`,
                    b.principal,
                    b.interest,
                    b.remaining
                ])
            }
        });
    };

    const handleShare = async () => {
        const shareURL = generateShareURL({
            loan: loanAmount,
            rate: rate,
            tenure: tenure
        });
        await copyToClipboard(shareURL);
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader
                title="EMI Calculator"
                subtitle="Calculate your monthly EMI and plan your loans effectively"
                image={toolsHeader}
                badge="Loan Tool"
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
                            <FaHome className="text-primary text-2xl" />
                            <h2 className="text-2xl font-bold text-neutral-900">Loan Details</h2>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Loan Amount
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Total loan amount you want to borrow
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    {formatCurrency(loanAmount)}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="100000"
                                max="10000000"
                                step="10000"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
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
                                    Interest Rate (p.a)
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Annual interest rate charged by the lender
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
                                max="20"
                                step="0.1"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>1%</span>
                                <span>20%</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700">
                                    Loan Tenure
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Duration over which you'll repay the loan
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    {tenure} Years
                                </span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={tenure}
                                onChange={(e) => setTenure(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-1">
                                <span>1 Year</span>
                                <span>30 Years</span>
                            </div>
                        </div>

                        {/* Quick Loan Type Presets */}
                        <div className="pt-4 border-t border-neutral-200">
                            <p className="text-sm font-semibold text-neutral-700 mb-3">Quick Presets</p>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => {
                                        setLoanAmount(3000000);
                                        setRate(8.5);
                                        setTenure(20);
                                    }}
                                    className="flex items-center gap-2 p-3 bg-neutral-100 hover:bg-primary hover:text-white rounded-lg transition-all text-sm font-medium"
                                >
                                    <FaHome />
                                    Home Loan
                                </button>
                                <button
                                    onClick={() => {
                                        setLoanAmount(500000);
                                        setRate(10);
                                        setTenure(5);
                                    }}
                                    className="flex items-center gap-2 p-3 bg-neutral-100 hover:bg-primary hover:text-white rounded-lg transition-all text-sm font-medium"
                                >
                                    <FaCar />
                                    Car Loan
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center justify-center space-y-8"
                    >
                        {/* EMI Display */}
                        <div className="w-full p-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl shadow-xl">
                            <p className="text-sm opacity-90 mb-2">Monthly EMI</p>
                            <p className="text-4xl md:text-5xl font-bold mb-4">
                                {formatCurrency(result.monthlyEMI)}
                            </p>
                            <div className="flex items-center gap-2 text-sm opacity-75">
                                <span>Pay this amount every month for {tenure} years</span>
                            </div>
                        </div>

                        {/* Doughnut Chart */}
                        <div className="w-full max-w-md">
                            <div className="relative">
                                <Doughnut data={doughnutData} options={doughnutOptions} />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <p className="text-xs text-neutral-500 mb-1">Total Payable</p>
                                        <p className="text-lg md:text-xl font-bold text-neutral-900">
                                            {formatCurrency(result.totalAmount)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-2 gap-6 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl shadow-md"
                            >
                                <p className="text-sm text-neutral-500 mb-2">Principal Amount</p>
                                <p className="text-lg font-bold text-neutral-900">
                                    {formatCurrency(loanAmount)}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-md"
                            >
                                <p className="text-sm text-neutral-500 mb-2">Total Interest</p>
                                <p className="text-lg font-bold text-red-600">
                                    {formatCurrency(result.totalInterest)}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Principal vs Interest Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 card"
                >
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">Yearly Principal vs Interest Breakdown</h3>
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
                    transition={{ delay: 0.6 }}
                    className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl"
                >
                    <p className="text-sm text-neutral-700">
                        <strong>Disclaimer:</strong> This calculator provides estimates based on the inputs provided. Actual EMI may vary based on the lender's terms and conditions. Please verify with your lender before making any financial commitments.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default EMICalculator;
