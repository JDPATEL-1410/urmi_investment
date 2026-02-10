import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { FaInfoCircle, FaGraduationCap } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ActionButtons from '../components/ActionButtons';
import toolsHeader from '../assets/tools-header.png';
import { calculateGoalSIP, calculateFutureValue, formatCurrency, generateShareURL, copyToClipboard, parseURLParams } from '../utils/calculatorUtils';
import { generateCalculatorPDF } from '../utils/pdfGenerator';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Filler);

const EducationCalculator = () => {
    const [currentCost, setCurrentCost] = useState(1000000);
    const [years, setYears] = useState(10);
    const [inflation, setInflation] = useState(6);
    const [returns, setReturns] = useState(12);

    useEffect(() => {
        const params = parseURLParams();
        if (params.cost) setCurrentCost(Number(params.cost));
        if (params.years) setYears(Number(params.years));
    }, []);

    const futureCost = calculateFutureValue(currentCost, inflation, years);
    const monthlySIP = calculateGoalSIP(futureCost, years, returns);
    const totalInvestment = monthlySIP * years * 12;
    const growth = futureCost - totalInvestment;

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
            title: 'Education Planning Report',
            subtitle: 'Secure Your Child\'s Future',
            calculatorType: 'Education',
            inputs: [
                { label: 'Current Education Cost', value: formatCurrency(currentCost) },
                { label: 'Years Until College', value: `${years} Years` },
                { label: 'Education Inflation', value: `${inflation}%` },
                { label: 'Expected Returns', value: `${returns}%` }
            ],
            results: [
                { label: 'Future Education Cost', value: formatCurrency(futureCost), highlight: true },
                { label: 'Monthly SIP Required', value: formatCurrency(monthlySIP), highlight: true },
                { label: 'Total Investment', value: formatCurrency(totalInvestment) },
                { label: 'Expected Growth', value: formatCurrency(growth) }
            ]
        });
    };

    const handleShare = async () => {
        await copyToClipboard(generateShareURL({ cost: currentCost, years }));
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader title="Education Planning" subtitle="Secure your child's future education" image={toolsHeader} badge="Planning Tool" />
            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 card">
                        <div className="flex items-center gap-2 mb-6">
                            <FaGraduationCap className="text-primary text-2xl" />
                            <h2 className="text-2xl font-bold text-neutral-900">Education Details</h2>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Current Education Cost
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Current cost of the education program you're planning for
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">
                                    {formatCurrency(currentCost)}
                                </span>
                            </div>
                            <input type="range" min="100000" max="10000000" step="50000" value={currentCost} onChange={e => setCurrentCost(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Years Until College
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Number of years until your child starts college
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">{years} Years</span>
                            </div>
                            <input type="range" min="1" max="20" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                                    Education Inflation
                                    <div className="group relative">
                                        <FaInfoCircle className="text-neutral-400 cursor-help text-xs" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-3 bg-neutral-900 text-white text-xs rounded-lg shadow-lg z-10">
                                            Education costs typically rise 8-10% annually
                                        </div>
                                    </div>
                                </label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">{inflation} %</span>
                            </div>
                            <input type="range" min="5" max="15" value={inflation} onChange={e => setInflation(Number(e.target.value))} className="w-full accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">Expected Returns</label>
                                <span className="bg-blue-50 text-primary font-bold px-3 py-1 rounded-lg text-sm">{returns} %</span>
                            </div>
                            <input type="range" min="8" max="15" step="0.5" value={returns} onChange={e => setReturns(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="card bg-gradient-to-br from-primary to-primary-dark text-white">
                            <h3 className="text-lg font-medium mb-6 opacity-90">Investment Plan</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/10 rounded-xl">
                                    <p className="text-sm opacity-90 mb-1">Future Education Cost</p>
                                    <p className="text-3xl font-bold">{formatCurrency(futureCost)}</p>
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
                                        <p className="text-xs text-neutral-500 mb-1">Total Corpus</p>
                                        <p className="text-lg font-bold text-neutral-900">{formatCurrency(futureCost)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-neutral-50 rounded-xl">
                                <p className="text-xs text-neutral-600 mb-1">Total Investment</p>
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
                        <strong>Disclaimer:</strong> Education costs vary significantly. This calculator provides estimates. Consider additional costs like accommodation, books, and living expenses.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default EducationCalculator;
