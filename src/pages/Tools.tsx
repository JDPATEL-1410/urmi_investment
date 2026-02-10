import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { tools } from '../data/content';

const Tools = () => {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-20 md:py-28">
                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Financial Tools & Calculators
                        </h1>
                        <p className="text-xl text-neutral-100">
                            Make informed financial decisions with our comprehensive suite of calculators and tools
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={tool.link}
                                    className="card card-hover group h-full flex flex-col"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent-green/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-4xl">{tool.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                                        {tool.title}
                                    </h3>
                                    <p className="text-neutral-600 mb-4 flex-grow">
                                        {tool.description}
                                    </p>
                                    <div className="inline-flex items-center text-primary font-semibold">
                                        Access Tool
                                        <svg
                                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                            Need Expert Guidance?
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8">
                            While our tools provide valuable insights, personalized advice from our experts can help you make the best financial decisions
                        </p>
                        <Link to="/contact" className="btn-primary">
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Tools;
