import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-20">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 lg:space-y-8 order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            AMFI Registered Mutual Fund Distributor
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                            Build Your{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-primary">Financial Future</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-green/20 -rotate-1"></span>
                            </span>{' '}
                            with Confidence
                        </h1>

                        <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
                            Expert financial guidance for Mutual Funds, Insurance, Wealth Management, and more. Your dreams, our commitment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Get Started Free
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                to="/services/mutual-funds"
                                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-primary font-semibold px-8 py-4 rounded-full border-2 border-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Explore Services
                            </Link>
                        </div>

                        {/* Trust Metrics */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200"
                        >
                            {[
                                { value: '1000+', label: 'Happy Clients' },
                                { value: '₹500Cr+', label: 'AUM Managed' },
                                { value: '15+', label: 'Years Exp.' }
                            ].map((metric, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-2xl lg:text-3xl font-bold text-primary">{metric.value}</div>
                                    <div className="text-sm text-neutral-600 mt-1">{metric.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-accent-green/10 rounded-full blur-3xl"></div>

                            {/* Main Image */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={heroImage}
                                    alt="Financial Planning with Urmi Financial Services"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs hidden lg:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-neutral-900">Trusted by 1000+</div>
                                        <div className="text-sm text-neutral-600">Indian Families</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Wave Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-12 lg:h-20 text-neutral-50" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
