import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { services } from '../data/services';
import BlogSection from '../components/BlogSection';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />


            {/* Services Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Our Best Services
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Tailored financial solutions, expert guidance, seamless transactions, and dedicated support, ensuring your financial endeavors are empowered with precision, reliability, and unwavering commitment to your success.
                        </p>
                    </motion.div>

                    {/* Grid with 2 columns on mobile, 2 on tablet, 3 on desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {services
                            .filter(service =>
                                ['mutual-funds', 'insurance', 'nps', 'fixed-bond', 'equity', 'aif-pms'].includes(service.id)
                            )
                            .map((service, index) => (
                                <ServiceCard
                                    key={service.id}
                                    id={service.id}
                                    title={service.title}
                                    description={service.shortDescription}
                                    icon={service.icon}
                                    index={index}
                                />
                            ))
                        }
                    </div>

                    {/* View All Services Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/services" className="btn-primary inline-flex items-center">
                            View All Services
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Why Choose Urmi Financial Services
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                number: '01',
                                title: 'One Stop Financial Solution',
                                description: 'We offer financial products to meet your short and long-term financial goals. We also offer products which take care of your liquidity and tax requirements.'
                            },
                            {
                                number: '02',
                                title: 'Professional & Unbiased Advice',
                                description: 'Professional advice can make a significant difference at every stage of your life. Our advisers are highly qualified with loads of experience in personal finance & wealth management.'
                            },
                            {
                                number: '03',
                                title: 'End To End Support',
                                description: 'We provide end to end support; from onboarding client till investment execution. Investment is a dynamic process and we provide the required support.'
                            }
                        ].map((reason, index) => (
                            <motion.div
                                key={reason.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="card card-hover"
                            >
                                <div className="text-6xl font-bold text-primary/10 mb-4">{reason.number}</div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">{reason.title}</h3>
                                <p className="text-neutral-600">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investor's Corner */}
            <section className="py-16 md:py-24 bg-[#051C3E] relative overflow-hidden text-white">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="section-container relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full text-primary-light text-sm font-bold mb-4 tracking-wider uppercase">
                                Powerful Tools
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                Investor's <span className="text-accent-green">Corner</span>
                            </h2>
                            <p className="text-lg text-neutral-300">
                                Empower your financial journey with our suite of expert-grade calculators and precision planning tools.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link to="/tools/calculators" className="group inline-flex items-center text-white font-bold hover:text-accent-green transition-colors">
                                Explore All Resources
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'SIP Calculator',
                                desc: 'Calculate the wealth you can create through regular monthly investments.',
                                icon: '📈',
                                link: '/tools/calculators/sip',
                                trend: '+12% Avg. Return'
                            },
                            {
                                title: 'Goal Planner',
                                desc: 'Map out your dreams and find exactly how much you need to save.',
                                icon: '🎯',
                                link: '/tools/calculators/goal',
                                trend: 'Plan Smart'
                            },
                            {
                                title: 'Retirement Tool',
                                desc: 'Ensure your golden years are financially secure and independent.',
                                icon: '⛱️',
                                link: '/tools/calculators/retirement',
                                trend: 'Secure Future'
                            },
                            {
                                title: 'Risk Profiler',
                                desc: 'Understand your risk appetite with our expert assessment patterns.',
                                icon: '⚖️',
                                link: '/tools/risk-profile',
                                trend: 'Stay Safe'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={item.link}
                                    className="block h-full group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-2xl shadow-lg ring-1 ring-white/20">
                                            {item.icon}
                                        </div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-accent-green bg-accent-green/10 px-2 py-1 rounded-md">
                                            {item.trend}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent-green transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center text-xs font-bold text-primary-light uppercase tracking-wider group-hover:gap-2 transition-all">
                                        Open Tool <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-accent-green/5 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <h4 className="text-2xl font-bold mb-2">Need a custom investment strategy?</h4>
                            <p className="text-neutral-400">Our experts can help you build a portfolio tailored to your unique financial profile.</p>
                        </div>
                        <Link to="/contact" className="btn-primary py-4 px-8 whitespace-nowrap">
                            Schedule A Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialSlider />

            {/* Blog Preview */}
            <BlogSection />

            {/* Partners */}
            {/* Partners Section - Static Version */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Our Trusted Partners
                        </h2>
                        <p className="text-lg text-neutral-600">
                            We collaborate with India's leading financial institutions
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-soft p-8 md:p-12"
                    >
                        <img
                            src="https://freedomlifex.com/img/my-img/client_logos_new.png"
                            alt="Our Financial Partners"
                            className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Home;
