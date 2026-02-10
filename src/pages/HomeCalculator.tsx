import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaInfoCircle, FaHome } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ActionButtons from '../components/ActionButtons';
import toolsHeader from '../assets/tools-header.png';
import { calculateGoalSIP, calculateFutureValue, formatCurrency, generateShareURL, copyToClipboard, parseURLParams } from '../utils/calculatorUtils';
import { generateCalculatorPDF } from '../utils/pdfGenerator';

ChartJS.register(ArcElement, Tooltip, Legend);

const HomeCalculator = () => {
    const [homePrice, setHomePrice] = useState(5000000);
    const [years, setYears] = useState(5);
    const [downPaymentPct, setDownPaymentPct] = useState(20);
    const [returns, setReturns] = useState(12);
    const inflation = 5; // Fixed home price inflation

    useEffect(() => {
        const params = parseURLParams();
        if (params.price) setHomePrice(Number(params.price));
        if (params.years) setYears(Number(params.years));
    }, []);

    const futurePrice = calculateFutureValue(homePrice, inflation, years);
    const downPaymentNeeded = futurePrice * (downPaymentPct / 100);
    const monthlySIP = calculateGoalSIP(downPaymentNeeded, years, returns);
    const totalInvestment = monthlySIP * years * 12;
    const growth = downPaymentNeeded - totalInvestment;

    const doughnutData = {
        labels: ['Your Investment', 'Growth'],
        datasets: [{
            data: [totalInvestment, growth],
            backgroundColor: ['#e5e7eb', '#1e3a8a'],
            borderWidth: 0,
        }],
    };

    const handleDownloadPDF = () => {
        generateCalculatorPDF({
            title: 'Home Buying Plan Report',
            subtitle: 'Save for Your Dream Home',
            calculatorType: 'Home',
            inputs: [
                { label: 'Current Home Price', value: formatCurrency(homePrice) },
                { label: 'Years to Buy', value: `${years} Years` },
                { label: 'Down Payment', value: `${downPaymentPct}%` },
                { label: 'Expected Returns', value: `${returns}%` }
            ],
            results: [
                { label: 'Future Home Price', value: formatCurrency(futurePrice) },
                { label: 'Down Payment Needed', value: formatCurrency(downPaymentNeeded), highlight: true },
                { label: 'Monthly SIP Required', value: formatCurrency(monthlySIP), highlight: true },
                { label: 'Total Investment', value: formatCurrency(totalInvestment) }
            ]
        });
    };

    const handleShare = async () => {
        await copyToClipboard(generateShareURL({ price: homePrice, years }));
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader title="Home Buying Planner" subtitle="Save for your dream home down payment" image={toolsHeader} badge="Planning Tool" />
            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 card">
                        <div className="flex items-center gap-2 mb-6">
                            <FaHome className="text-primary text-2xl" />
                            <h2 className="text-2xl font-bold text-neutral-900">Home Details</h2>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Current Home Price
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Current market price of your target home
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {formatCurrency(homePrice)}
                                </span>
                            </div>
                            <input type="range" min="2000000" max="20000000" step="500000" value={homePrice} onChange={e => setHomePrice(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="font-semibold text-neutral-700 text-sm">Years to Buy</label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">{years} Years</span>
                            </div>
                            <input type="range" min="1" max="15" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Down Payment
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Typically 20-30% of home price
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">{downPaymentPct} %</span>
                            </div>
                            <input type="range" min="10" max="40" value={downPaymentPct} onChange={e => setDownPaymentPct(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="font-semibold text-neutral-700 text-sm">Expected Returns</label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">{returns} %</span>
                            </div>
                            <input type="range" min="8" max="15" step="0.5" value={returns} onChange={e => setReturns(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                            <p className="text-xs text-neutral-600 mb-1">Assumed Home Price Inflation</p>
                            <p className="text-lg font-bold text-primary">{inflation}% per year</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="card bg-gradient-to-br from-primary to-primary-dark text-white">
                            <h3 className="text-lg font-medium mb-6 opacity-90">Investment Plan</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <p className="text-sm opacity-90 mb-1">Down Payment Needed</p>
                                    <p className="text-3xl font-bold">{formatCurrency(downPaymentNeeded)}</p>
                                    <p className="text-xs opacity-75 mt-1">{downPaymentPct}% of {formatCurrency(futurePrice)}</p>
                                </div>
                                <div className="p-4 bg-white/20 rounded-xl border-2 border-white/30">
                                    <p className="text-sm opacity-90 mb-1">Monthly SIP Required</p>
                                    <p className="text-3xl font-bold text-accent-green">{formatCurrency(monthlySIP)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="relative">
                                <Doughnut data={doughnutData} options={{ cutout: '70%', plugins: { legend: { position: 'bottom' as const } } }} />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <p className="text-xs text-neutral-500 mb-1">Down Payment</p>
                                        <p className="text-lg font-bold text-neutral-900">{formatCurrency(downPaymentNeeded)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-neutral-50 rounded-xl">
                                <p className="text-xs text-neutral-600 mb-1">Your Investment</p>
                                <p className="text-lg font-bold text-neutral-900">{formatCurrency(totalInvestment)}</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-xl">
                                <p className="text-xs text-neutral-600 mb-1">Growth</p>
                                <p className="text-lg font-bold text-green-600">{formatCurrency(growth)}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <ActionButtons onDownloadPDF={handleDownloadPDF} onShare={handleShare} className="mt-8" />

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-sm text-neutral-700">
                        <strong>Disclaimer:</strong> Home prices vary by location and market conditions. This calculator helps you plan for the down payment. Consider additional costs like registration, stamp duty, and furnishing.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeCalculator;
