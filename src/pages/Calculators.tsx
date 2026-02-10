import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

const Calculators = () => {
    const calculators = [
        {
            id: 'sip',
            title: 'SIP Calculator',
            description: 'Calculate returns on your Systematic Investment Plan',
            icon: '📊',
            link: '/tools/sip-calculator',
            category: 'Investment'
        },
        {
            id: 'retirement',
            title: 'Retirement Calculator',
            description: 'Plan your retirement corpus and monthly savings',
            icon: '🏖️',
            link: '/tools/retirement-calculator',
            category: 'Goal Based'
        },
        {
            id: 'goal',
            title: 'Goal Planning Calculator',
            description: 'Calculate savings needed for your financial goals',
            icon: '🎯',
            link: '/tools/goal-calculator',
            category: 'Goal Based'
        },
        {
            id: 'emi',
            title: 'EMI Calculator',
            description: 'Calculate your loan EMI and total interest',
            icon: '🏠',
            link: '/tools/emi-calculator',
            category: 'Loan'
        },
        {
            id: 'lumpsum',
            title: 'Lumpsum Calculator',
            description: 'Calculate returns on one-time investments',
            icon: '💰',
            link: '/tools/lumpsum-calculator',
            category: 'Investment'
        },
        {
            id: 'fd',
            title: 'FD Calculator',
            description: 'Calculate Fixed Deposit maturity amount',
            icon: '🏦',
            link: '/tools/fd-calculator',
            category: 'Investment'
        },
        {
            id: 'ppf',
            title: 'PPF Calculator',
            description: 'Calculate Public Provident Fund returns',
            icon: '📈',
            link: '/tools/ppf-calculator',
            category: 'Investment'
        },
        {
            id: 'nps',
            title: 'NPS Calculator',
            description: 'Calculate National Pension System returns',
            icon: '🎓',
            link: '/tools/nps-calculator',
            category: 'Retirement'
        },
        {
            id: 'swp',
            title: 'SWP Calculator',
            description: 'Calculate Systematic Withdrawal Plan',
            icon: '💸',
            link: '/tools/swp-calculator',
            category: 'Investment'
        },
        {
            id: 'education',
            title: 'Education Planning Calculator',
            description: 'Plan for your child\'s education expenses',
            icon: '🎓',
            link: '/tools/education-calculator',
            category: 'Goal Based'
        },
        {
            id: 'marriage',
            title: 'Marriage Planning Calculator',
            description: 'Plan for wedding and marriage expenses',
            icon: '💍',
            link: '/tools/marriage-calculator',
            category: 'Goal Based'
        },
        {
            id: 'home',
            title: 'Home Buying Calculator',
            description: 'Calculate home loan eligibility and affordability',
            icon: '🏡',
            link: '/tools/home-calculator',
            category: 'Goal Based'
        }
    ];

    const categories = ['All', 'Investment', 'Goal Based', 'Loan', 'Retirement'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredCalculators = selectedCategory === 'All'
        ? calculators
        : calculators.filter(calc => calc.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Financial Calculators"
                subtitle="Plan your financial future with our comprehensive suite of calculators"
                image={toolsHeader}
                badge="Free Tools"
            />

            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Calculators Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCalculators.map((calculator, index) => (
                            <motion.div
                                key={calculator.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    to={calculator.link}
                                    className="card card-hover h-full flex flex-col group"
                                >
                                    <div className="text-5xl mb-4">{calculator.icon}</div>
                                    <div className="mb-2">
                                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {calculator.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                                        {calculator.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm mb-4 flex-grow">
                                        {calculator.description}
                                    </p>
                                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                        Calculate Now
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Need Expert Guidance?
                        </h3>
                        <p className="text-lg text-neutral-100 mb-6 max-w-2xl mx-auto">
                            Our financial advisors can help you create a personalized plan based on your goals
                        </p>
                        <Link to="/contact" className="btn-accent inline-block">
                            Schedule Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Calculators;
