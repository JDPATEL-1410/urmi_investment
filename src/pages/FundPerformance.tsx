import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

const FundPerformance = () => {
    const topFunds = [
        { name: 'HDFC Top 100 Fund', category: 'Large Cap', returns1y: '18.5%', returns3y: '15.2%', returns5y: '14.8%' },
        { name: 'ICICI Prudential Bluechip Fund', category: 'Large Cap', returns1y: '17.8%', returns3y: '14.9%', returns5y: '14.2%' },
        { name: 'Axis Midcap Fund', category: 'Mid Cap', returns1y: '22.3%', returns3y: '18.7%', returns5y: '16.5%' },
        { name: 'Kotak Emerging Equity Fund', category: 'Mid Cap', returns1y: '21.5%', returns3y: '17.9%', returns5y: '15.8%' },
        { name: 'SBI Small Cap Fund', category: 'Small Cap', returns1y: '25.2%', returns3y: '20.1%', returns5y: '18.3%' },
        { name: 'Nippon India Small Cap Fund', category: 'Small Cap', returns1y: '24.8%', returns3y: '19.5%', returns5y: '17.9%' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Mutual Fund Performance"
                subtitle="Track and compare top-performing mutual funds across different categories"
                image={toolsHeader}
                badge="Live Market Data"
            />

            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Top Performing Funds</h2>
                        <p className="text-neutral-600">Based on historical returns. Past performance doesn't guarantee future results.</p>
                    </motion.div>

                    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Fund Name</th>
                                        <th className="px-6 py-4 text-left font-semibold">Category</th>
                                        <th className="px-6 py-4 text-right font-semibold">1 Year</th>
                                        <th className="px-6 py-4 text-right font-semibold">3 Years</th>
                                        <th className="px-6 py-4 text-right font-semibold">5 Years</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topFunds.map((fund, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 font-medium text-neutral-900">{fund.name}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                                    {fund.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-semibold text-accent-green">{fund.returns1y}</td>
                                            <td className="px-6 py-4 text-right font-semibold text-accent-green">{fund.returns3y}</td>
                                            <td className="px-6 py-4 text-right font-semibold text-accent-green">{fund.returns5y}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                        <p className="text-sm text-neutral-700">
                            <strong>Disclaimer:</strong> The performance data shown is for illustrative purposes only. Mutual fund investments are subject to market risks. Past performance is not indicative of future results. Please read all scheme related documents carefully before investing.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FundPerformance;
