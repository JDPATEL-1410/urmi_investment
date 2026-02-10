import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const PPFCalculator = () => {
    const [annualInvestment, setAnnualInvestment] = useState(100000);
    const [years, setYears] = useState(15);
    const rate = 7.1; // Fixed PPF rate approx
    const [result, setResult] = useState({ invested: 0, interest: 0, maturity: 0 });

    useEffect(() => {
        let maturity = 0;
        let invested = 0;
        for (let i = 0; i < years; i++) {
            invested += annualInvestment;
            maturity = (maturity + annualInvestment) * (1 + rate / 100);
        }
        setResult({
            invested: Math.round(invested),
            interest: Math.round(maturity - invested),
            maturity: Math.round(maturity)
        });
    }, [annualInvestment, years]);

    const chartData = {
        labels: ['Invested', 'Interest'],
        datasets: [{
            data: [result.invested, result.interest],
            backgroundColor: ['#e5e7eb', '#1e3a8a'],
            borderWidth: 0,
        }],
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            <PageHeader title="PPF Calculator" subtitle="Public Provident Fund Returns" image={toolsHeader} badge="Tax Saving" />
            <div className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block font-semibold mb-2">Annual Investment: ₹ {annualInvestment.toLocaleString()}</label>
                            <input type="range" min="500" max="150000" step="500" value={annualInvestment} onChange={e => setAnnualInvestment(Number(e.target.value))} className="w-full accent-primary" />
                            <p className="text-xs text-gray-500 mt-1">Max ₹1.5 Lakh per year</p>
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Duration: {years} Years</label>
                            <input type="range" min="15" max="50" step="5" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full accent-primary" />
                        </div>
                    </div>
                    <div className="text-center space-y-4">
                        <h3 className="text-xl font-bold">Maturity Amount: ₹ {result.maturity.toLocaleString()}</h3>
                        <div className="w-48 h-48 mx-auto"><Doughnut data={chartData} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PPFCalculator;
