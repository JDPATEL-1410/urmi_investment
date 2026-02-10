import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { useState } from 'react';
import { serviceGradients, serviceImages } from '../data/serviceThemes';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = services.find(s => s.id === serviceId);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    if (!service) {
        return <Navigate to="/services/mutual-funds" replace />;
    }

    const gradientClass = serviceGradients[service.id] || 'from-primary via-primary-dark to-primary-light';
    const bgImage = serviceImages[service.id];

    return (
        <div className="min-h-screen">
            {/* Unique Header with Real Image and Gradient Overlay */}
            <section className={`relative text-white py-20 md:py-28 overflow-hidden bg-neutral-900`}>
                {/* Background Image */}
                {bgImage && (
                    <div className="absolute inset-0 z-0">
                        <img
                            src={bgImage}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                        />
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-90 z-0 mix-blend-multiply`}></div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10 z-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Large Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            className="text-8xl md:text-9xl mb-6 drop-shadow-lg"
                        >
                            {service.icon}
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                            {service.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            {service.shortDescription}
                        </p>
                    </motion.div>
                </div>

                {/* Wave Separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-12 lg:h-20 text-white" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="currentColor">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none mb-12"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">What is {service.title}?</h2>
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </motion.div>

                        {/* Key Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Key Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-3 bg-neutral-50 p-4 rounded-xl"
                                    >
                                        <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-neutral-700">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Who Should Consider */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Who Should Consider {service.title}?</h2>
                            <div className="space-y-3">
                                {service.whoShouldConsider.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-neutral-700 pt-1">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* FAQs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {service.faqs.map((faq, index) => (
                                    <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                                        >
                                            <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                                            <svg
                                                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openFaq === index && (
                                            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                                                <p className="text-neutral-600">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 text-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Interested in {service.title}?
                            </h3>
                            <p className="text-lg text-neutral-100 mb-6">
                                Let our experts help you make the right financial decisions
                            </p>
                            <Link to="/contact" className="btn-accent inline-block">
                                Talk to Us About {service.title}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                        Explore Other Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services
                            .filter(s => s.id !== serviceId)
                            .slice(0, 3)
                            .map((relatedService) => (
                                <Link
                                    key={relatedService.id}
                                    to={`/services/${relatedService.id}`}
                                    className="card card-hover group"
                                >
                                    <div className="text-4xl mb-4">{relatedService.icon}</div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                                        {relatedService.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm line-clamp-2">
                                        {relatedService.shortDescription}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
