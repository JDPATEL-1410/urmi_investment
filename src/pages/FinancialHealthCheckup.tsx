import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

const FinancialHealthCheckup = () => {
    const [answers, setAnswers] = useState({
        emergency: '',
        insurance: '',
        debt: '',
        savings: '',
        retirement: ''
    });

    const questions = [
        {
            id: 'emergency',
            question: 'Do you have an emergency fund covering 6 months of expenses?',
            options: ['Yes', 'Partially', 'No']
        },
        {
            id: 'insurance',
            question: 'Do you have adequate life and health insurance?',
            options: ['Yes', 'Partially', 'No']
        },
        {
            id: 'debt',
            question: 'Is your debt-to-income ratio below 40%?',
            options: ['Yes', 'Not Sure', 'No']
        },
        {
            id: 'savings',
            question: 'Do you save at least 20% of your monthly income?',
            options: ['Yes', 'Sometimes', 'No']
        },
        {
            id: 'retirement',
            question: 'Have you started planning for retirement?',
            options: ['Yes', 'Thinking about it', 'No']
        }
    ];

    const calculateScore = () => {
        let score = 0;
        Object.values(answers).forEach(answer => {
            if (answer === 'Yes') score += 20;
            else if (answer === 'Partially' || answer === 'Sometimes' || answer === 'Thinking about it' || answer === 'Not Sure') score += 10;
        });
        return score;
    };

    const score = calculateScore();
    const allAnswered = Object.values(answers).every(a => a !== '');

    const getHealthStatus = (score: number) => {
        if (score >= 80) return { status: 'Excellent', color: 'text-accent-green', bg: 'bg-accent-green/10' };
        if (score >= 60) return { status: 'Good', color: 'text-primary', bg: 'bg-primary/10' };
        if (score >= 40) return { status: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-50' };
        return { status: 'Needs Improvement', color: 'text-accent-red', bg: 'bg-red-50' };
    };

    const health = getHealthStatus(score);

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Financial Health Checkup"
                subtitle="Assess your financial wellness and get personalized recommendations"
                image={toolsHeader}
                badge="Free Assessment"
            />

            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {questions.map((q, index) => (
                            <div key={q.id} className="card">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                                    {index + 1}. {q.question}
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    {q.options.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => setAnswers({ ...answers, [q.id]: option })}
                                            className={`flex-1 px-6 py-3 rounded-lg border-2 transition-all ${answers[q.id as keyof typeof answers] === option
                                                    ? 'border-primary bg-primary text-white'
                                                    : 'border-neutral-200 hover:border-primary hover:bg-primary/5'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {allAnswered && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`card ${health.bg} border-2 border-${health.color.replace('text-', '')}`}
                            >
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Your Financial Health Score</h3>
                                    <div className={`text-6xl font-bold ${health.color} mb-4`}>{score}/100</div>
                                    <div className={`inline-block px-6 py-2 rounded-full ${health.bg} ${health.color} font-semibold text-lg mb-6`}>
                                        {health.status}
                                    </div>

                                    <div className="text-left mt-8 space-y-4">
                                        <h4 className="font-semibold text-neutral-900">Recommendations:</h4>
                                        <ul className="space-y-2 text-neutral-700">
                                            {score < 80 && <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Consider building an emergency fund covering 6 months of expenses</span>
                                            </li>}
                                            {score < 60 && <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Review and update your insurance coverage</span>
                                            </li>}
                                            {score < 40 && <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Start a systematic investment plan (SIP) for long-term wealth creation</span>
                                            </li>}
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Schedule a consultation with our financial advisors for personalized guidance</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <button className="btn-primary mt-8">
                                        Schedule Free Consultation
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FinancialHealthCheckup;
