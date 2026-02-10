import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const NPSCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge] = useState(60);
    const [expectedReturn, setExpectedReturn] = useState(10);
    const [result, setResult] = useState({ invested: 0, gain: 0, corpus: 0 });

    useEffect(() => {
        const years = retirementAge - currentAge;
        const months = years * 12;
        const r = expectedReturn / 12 / 100;

        let corpus = 0;
        if (r === 0) {
            corpus = monthlyInvestment * months;
        } else {
            corpus = (monthlyInvestment * (Math.pow(1 + r, months) - 1)) / r * (1 + r);
        }

        const invested = monthlyInvestment * months;
        setResult({
            invested: Math.round(invested),
            gain: Math.round(corpus - invested),
            corpus: Math.round(corpus)
        });
    }, [monthlyInvestment, currentAge, expectedReturn, retirementAge]);

    const chartData = {
        labels: ['Invested', 'Gains'],
        datasets: [{
            data: [result.invested, result.gain],
            backgroundColor: ['#e5e7eb', '#1e3a8a'],
            borderWidth: 0,
        }],
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader title="NPS Calculator" subtitle="National Pension System" image={toolsHeader} badge="Retirement" />
            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block font-semibold mb-2">Monthly Investment: ₹ {monthlyInvestment.toLocaleString()}</label>
                            <input type="range" min="500" max="150000" step="500" value={monthlyInvestment} onChange={e => setMonthlyInvestment(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Current Age: {currentAge}</label>
                            <input type="range" min="18" max="59" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Expected Return: {expectedReturn} %</label>
                            <input type="range" min="8" max="15" step="0.5" value={expectedReturn} onChange={e => setExpectedReturn(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                    </div>
                    <div className="text-center space-y-4">
                        <h3 className="text-xl font-bold">Total Corpus: ₹ {result.corpus.toLocaleString()}</h3>
                        <div className="w-48 h-48 mx-auto"><Doughnut data={chartData} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NPSCalculator;
