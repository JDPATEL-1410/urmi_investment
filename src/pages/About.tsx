import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import aboutImage from '../assets/about-image.png';
import whoWeAreImage from '../assets/images/who-we-are-about.png';
import founderImage from '../assets/dinesh-bhalawala.png';
import mihirImage from '../assets/team/mihir-kayasth.jpg';
import hemantImage from '../assets/team/hemant-solanki.png';
import dalalImage from '../assets/team/dalal-alfaran.png';
import nimeshImage from '../assets/team/nimesh-jariwala.png';
import jigneshImage from '../assets/team/jignesh-patel.png';

const About = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="About Urmi Financial Services"
                subtitle="Your trusted partner in building a secure and prosperous financial future"
                image={aboutImage}
                badge="AMFI Registered | MSME Certified"
            />

            {/* Who We Are */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-1"
                        >
                            <img
                                src={whoWeAreImage}
                                alt="Urmi Financial Services - Your Trusted Financial Companion"
                                className="rounded-2xl shadow-soft-lg w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                                Who We Are
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                Welcome to Urmi Financial Services Pvt Ltd, your trusted financial companion in India. We understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to leave behind.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                At Urmi Financial Services Pvt Ltd, we are driven by the belief that everyone deserves a secure and prosperous future. We are India's 1st Certified Financial Guardian Company, Financial Services & Training Enterprise, and also registered as Micro & Small Medium Enterprise – MSME under Govt. of India.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                Our team of experienced financial advisors is committed to providing personalized, unbiased advice that puts your interests first. We take pride in building long-term relationships with our clients, guiding them through every stage of their financial journey.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent-green/5">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Meet Our Founder
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Leading with expertise, integrity, and a vision for your financial success
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-2"
                            >
                                <div>
                                    <img
                                        src={founderImage}
                                        alt="Mr. Dinesh Bhalawala - Founder & Director"
                                        className="rounded-2xl shadow-soft-xl w-full h-auto"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-3 space-y-6"
                            >
                                <div>
                                    <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                                        Mr. Dinesh Bhalawala
                                    </h3>
                                    <p className="text-xl text-primary font-semibold mb-4">
                                        Founder & Director of Urmi Investment
                                    </p>
                                </div>

                                <div className="space-y-4 text-neutral-600 leading-relaxed">
                                    <p>
                                        Mr. Dinesh Bhalawala is a Financial and Estate Planner who pursued his Masters in Commerce, following which he did a certificate course in Information Technology, as well as a course to become a Certified Financial Planner.
                                    </p>
                                    <p>
                                        Since then, he has registered IFA with the Association of Mutual Funds in India and with the Insurance Regulation and Development Authority (IRDA).
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-soft">
                                    <h4 className="text-lg font-bold text-neutral-900 mb-3">Key Partnerships</h4>
                                    <ul className="space-y-2 text-neutral-600">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Gold Partner with ICICI Prudential Mutual Fund</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Star Key Partner with HDFC Mutual Fund</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Gold Partner with Reliance Mutual Fund</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Our mission is to be the bridge to financial success for every Indian. We aim to provide guidance, support, and reliable financial services, ensuring individuals across the nation can achieve their financial goals. We strive to make financial planning accessible, understandable, and effective for everyone.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="card"
                        >
                            <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Our vision is to witness a financially literate and secure India where every individual's financial dreams are realized. We strive to empower our clients through personalized services, fostering financial well-being and creating a legacy of prosperity for future generations.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Our Approach to Financial Planning
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            We follow a systematic, client-centric approach to help you achieve your financial goals
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Understanding Your Goals',
                                description: 'We begin by listening to your dreams, aspirations, and financial objectives. Every client is unique, and we take the time to understand what matters most to you.'
                            },
                            {
                                step: '02',
                                title: 'Comprehensive Analysis',
                                description: 'Our experts conduct a thorough analysis of your current financial situation, including income, expenses, assets, liabilities, and risk profile.'
                            },
                            {
                                step: '03',
                                title: 'Customized Strategy',
                                description: 'Based on our analysis, we create a personalized financial plan tailored to your specific needs, goals, and risk tolerance.'
                            },
                            {
                                step: '04',
                                title: 'Implementation & Execution',
                                description: 'We help you implement the strategy with the right financial products and services, ensuring seamless execution of your financial plan.'
                            },
                            {
                                step: '05',
                                title: 'Ongoing Support & Review',
                                description: 'Financial planning is a dynamic process. We provide continuous support, regular reviews, and adjustments to keep you on track towards your goals.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start space-x-6 mb-8 last:mb-0"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {item.step}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-neutral-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-neutral-100 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { icon: '🤝', title: 'Trust', description: 'Building lasting relationships based on integrity and transparency' },
                            { icon: '🎯', title: 'Excellence', description: 'Delivering superior service and expert financial guidance' },
                            { icon: '💡', title: 'Innovation', description: 'Embracing modern solutions for better financial outcomes' },
                            { icon: '❤️', title: 'Client-First', description: 'Your financial success is our top priority' }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-neutral-200 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Dedicated professionals committed to your financial success
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {[
                            {
                                name: 'Mihir Kayasth',
                                designation: 'Relationship Executive',
                                image: mihirImage
                            },
                            {
                                name: 'Hemant Solanki',
                                designation: 'Relationship Executive',
                                image: hemantImage
                            },
                            {
                                name: 'Dalal Alfaran',
                                designation: 'Relationship Executive',
                                image: dalalImage
                            },
                            {
                                name: 'Nimesh Jariwala',
                                designation: 'Business Development Manager',
                                image: nimeshImage
                            },
                            {
                                name: 'Jignesh Patel',
                                designation: 'Relationship Executive',
                                image: jigneshImage
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="card hover:shadow-soft-xl transition-all duration-300">
                                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-neutral-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-primary font-medium">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                            Ready to Begin Your Financial Journey?
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8">
                            Let's work together to create a financial plan that brings your dreams to life
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-primary">
                                Get in Touch
                            </Link>
                            <Link to="/services/mutual-funds" className="btn-secondary">
                                Explore Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
