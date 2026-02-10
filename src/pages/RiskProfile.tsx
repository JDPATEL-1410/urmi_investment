import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

const RiskProfile = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);

    const questions = [
        {
            question: 'What is your investment time horizon?',
            options: [
                { text: 'Less than 3 years', score: 1 },
                { text: '3-5 years', score: 2 },
                { text: '5-10 years', score: 3 },
                { text: 'More than 10 years', score: 4 }
            ]
        },
        {
            question: 'How would you react if your investment value dropped by 20% in a month?',
            options: [
                { text: 'Sell immediately to prevent further loss', score: 1 },
                { text: 'Feel worried but wait and watch', score: 2 },
                { text: 'Stay calm and hold', score: 3 },
                { text: 'Buy more at lower prices', score: 4 }
            ]
        },
        {
            question: 'What percentage of your income do you save/invest monthly?',
            options: [
                { text: 'Less than 10%', score: 1 },
                { text: '10-20%', score: 2 },
                { text: '20-30%', score: 3 },
                { text: 'More than 30%', score: 4 }
            ]
        },
        {
            question: 'What is your primary investment goal?',
            options: [
                { text: 'Capital preservation', score: 1 },
                { text: 'Regular income', score: 2 },
                { text: 'Balanced growth', score: 3 },
                { text: 'Maximum growth', score: 4 }
            ]
        },
        {
            question: 'How familiar are you with financial markets?',
            options: [
                { text: 'Not familiar at all', score: 1 },
                { text: 'Basic understanding', score: 2 },
                { text: 'Good understanding', score: 3 },
                { text: 'Expert level', score: 4 }
            ]
        }
    ];

    const handleAnswer = (score: number) => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const calculateRiskProfile = () => {
        const totalScore = answers.reduce((sum, score) => sum + score, 0);
        const avgScore = totalScore / answers.length;

        if (avgScore <= 1.5) return { profile: 'Conservative', color: 'text-blue-600', bg: 'bg-blue-50', desc: 'You prefer stable, low-risk investments with predictable returns.' };
        if (avgScore <= 2.5) return { profile: 'Moderate', color: 'text-primary', bg: 'bg-primary/10', desc: 'You seek a balance between growth and stability.' };
        if (avgScore <= 3.5) return { profile: 'Aggressive', color: 'text-accent-green', bg: 'bg-accent-green/10', desc: 'You are comfortable with higher risk for potentially higher returns.' };
        return { profile: 'Very Aggressive', color: 'text-accent-red', bg: 'bg-red-50', desc: 'You actively seek maximum growth and can handle significant volatility.' };
    };

    const isComplete = answers.length === questions.length;
    const result = isComplete ? calculateRiskProfile() : null;

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Risk Profile Assessment"
                subtitle="Understand your investment risk tolerance and get personalized recommendations"
                image={toolsHeader}
                badge="Personalized Analysis"
            />

            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container max-w-3xl">
                    {!isComplete ? (
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card"
                        >
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium text-neutral-600">
                                        Question {currentQuestion + 1} of {questions.length}
                                    </span>
                                    <span className="text-sm font-medium text-primary">
                                        {Math.round(((currentQuestion) / questions.length) * 100)}% Complete
                                    </span>
                                </div>
                                <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                                {questions[currentQuestion].question}
                            </h3>

                            <div className="space-y-3">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(option.score)}
                                        className="w-full text-left px-6 py-4 border-2 border-neutral-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-neutral-900 group-hover:text-primary transition-colors">
                                                {option.text}
                                            </span>
                                            <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`card ${result?.bg}`}
                        >
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <svg className={`w-10 h-10 ${result?.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-3xl font-bold text-neutral-900 mb-2">Your Risk Profile</h3>
                                <div className={`text-4xl font-bold ${result?.color} mb-4`}>{result?.profile}</div>
                                <p className="text-lg text-neutral-700 mb-8">{result?.desc}</p>

                                <div className="bg-white rounded-xl p-6 text-left mb-8">
                                    <h4 className="font-semibold text-neutral-900 mb-4">Recommended Investment Mix:</h4>
                                    <div className="space-y-3">
                                        {result?.profile === 'Conservative' && (
                                            <>
                                                <div className="flex justify-between items-center">
                                                    <span>Debt Funds</span>
                                                    <span className="font-semibold">70%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Balanced Funds</span>
                                                    <span className="font-semibold">20%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Equity Funds</span>
                                                    <span className="font-semibold">10%</span>
                                                </div>
                                            </>
                                        )}
                                        {result?.profile === 'Moderate' && (
                                            <>
                                                <div className="flex justify-between items-center">
                                                    <span>Equity Funds</span>
                                                    <span className="font-semibold">50%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Debt Funds</span>
                                                    <span className="font-semibold">40%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Gold/Other</span>
                                                    <span className="font-semibold">10%</span>
                                                </div>
                                            </>
                                        )}
                                        {(result?.profile === 'Aggressive' || result?.profile === 'Very Aggressive') && (
                                            <>
                                                <div className="flex justify-between items-center">
                                                    <span>Equity Funds</span>
                                                    <span className="font-semibold">80%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Debt Funds</span>
                                                    <span className="font-semibold">15%</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Alternative Investments</span>
                                                    <span className="font-semibold">5%</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button onClick={resetQuiz} className="btn-secondary flex-1">
                                        Retake Assessment
                                    </button>
                                    <button className="btn-primary flex-1">
                                        Get Personalized Plan
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default RiskProfile;
