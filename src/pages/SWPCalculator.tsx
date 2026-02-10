import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const SWPCalculator = () => {
    const [totalInvestment, setTotalInvestment] = useState(1000000);
    const [withdrawal, setWithdrawal] = useState(10000);
    const [years, setYears] = useState(5);
    const [rate, setRate] = useState(10);
    const [finalValue, setFinalValue] = useState(0);

    useEffect(() => {
        // Annuity of withdrawals (assuming end of year for simplicity or monthly * 12)
        // Let's do monthly logic
        const mr = rate / 12 / 100;
        const mn = years * 12;
        const fvInvM = totalInvestment * Math.pow(1 + mr, mn);
        // FV of annuity regular (withdrawals)
        const fvWith = withdrawal * ((Math.pow(1 + mr, mn) - 1) / mr);

        const rem = fvInvM - fvWith;
        setFinalValue(Math.round(rem > 0 ? rem : 0));
    }, [totalInvestment, withdrawal, years, rate]);

    const chartData = {
        labels: ['Invested', 'Withdrawn Total', 'Remaining'],
        datasets: [{
            data: [totalInvestment, withdrawal * years * 12, finalValue],
            backgroundColor: ['#e5e7eb', '#ef4444', '#1e3a8a'],
            borderWidth: 0,
        }],
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader title="SWP Calculator" subtitle="Systematic Withdrawal Plan" image={toolsHeader} badge="Income Tool" />
            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block font-semibold mb-2">Total Investment: ₹ {totalInvestment.toLocaleString()}</label>
                            <input type="range" min="100000" max="5000000" step="50000" value={totalInvestment} onChange={e => setTotalInvestment(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Monthly Withdrawal: ₹ {withdrawal.toLocaleString()}</label>
                            <input type="range" min="1000" max="50000" step="500" value={withdrawal} onChange={e => setWithdrawal(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Duration: {years} Years</label>
                            <input type="range" min="1" max="30" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Expected Return: {rate} %</label>
                            <input type="range" min="6" max="15" step="0.5" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                    </div>
                    <div className="text-center space-y-4">
                        <h3 className="text-xl font-bold">Remaining Value: ₹ {finalValue.toLocaleString()}</h3>
                        <p>Total Withdrawn: ₹ {(withdrawal * years * 12).toLocaleString()}</p>
                        <div className="w-48 h-48 mx-auto"><Doughnut data={chartData} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SWPCalculator;
