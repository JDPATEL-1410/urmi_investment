import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { services } from '../data/services';
import servicesHeaderImage from '../assets/images/services-header.png';

const Services = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Our Financial Services"
                subtitle="Comprehensive financial solutions tailored to your needs - from investments to insurance, we've got you covered"
                badge="Expert Guidance"
                image={servicesHeaderImage}
            />

            {/* Services Grid */}
            <section className="py-16 md:py-24">
                <div className="section-container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/services/${service.id}`}
                                    className="card card-hover h-full flex flex-col group"
                                >
                                    {/* Icon */}
                                    <div className="text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-neutral-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                                        {service.shortDescription}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors">
                                        Learn More
                                        <svg
                                            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
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

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
                <div className="section-container">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Need Help Choosing the Right Service?
                            </h2>
                            <p className="text-lg text-neutral-100 mb-8">
                                Our financial experts are here to guide you through your investment journey. Get personalized advice tailored to your financial goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="btn-accent">
                                    Get in Touch
                                </Link>
                                <Link to="/tools/calculators" className="btn-secondary">
                                    Explore Financial Tools
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
