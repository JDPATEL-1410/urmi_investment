import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const FDCalculator = () => {
    const [investment, setInvestment] = useState(100000);
    const [rate, setRate] = useState(7);
    const [years, setYears] = useState(5);
    const [result, setResult] = useState({
        invested: 0,
        returns: 0,
        total: 0
    });

    useEffect(() => {
        const invested = investment;
        const total = Math.round(investment * Math.pow((1 + rate / 100), years));
        const returns = total - invested;

        setResult({
            invested,
            returns,
            total
        });
    }, [investment, rate, years]);

    const chartData = {
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

    const chartOptions = {
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

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader
                title="FD Calculator"
                subtitle="Calculate the maturity value of your Fixed Deposits"
                image={toolsHeader}
                badge="Investment Tool"
            />

            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="font-semibold text-neutral-700">Total Investment</label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">
                                    ₹ {investment.toLocaleString()}
                                </span>
                            </div>
                            <input type="range" min="10000" max="10000000" step="10000" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="font-semibold text-neutral-700">Interest Rate (p.a)</label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">{rate} %</span>
                            </div>
                            <input type="range" min="3" max="15" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                        </div>

                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="font-semibold text-neutral-700">Time Period</label>
                                <span className="bg-blue-50 text-primary font-bold px-4 py-1 rounded-lg">{years} Years</span>
                            </div>
                            <input type="range" min="1" max="25" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-8">
                        <div className="w-64 h-64 relative">
                            <Doughnut data={chartData} options={chartOptions} />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center">
                                    <p className="text-xs text-neutral-500 mb-1">Total Value</p>
                                    <p className="text-xl font-bold text-neutral-900">₹ {result.total.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 w-full">
                            <div className="text-center p-4 bg-neutral-50 rounded-xl">
                                <p className="text-sm text-neutral-500 mb-1">Invested Amount</p>
                                <p className="text-lg font-bold text-neutral-900">₹ {result.invested.toLocaleString()}</p>
                            </div>
                            <div className="text-center p-4 bg-neutral-50 rounded-xl">
                                <p className="text-sm text-neutral-500 mb-1">Est. Returns</p>
                                <p className="text-lg font-bold text-primary">₹ {result.returns.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FDCalculator;
