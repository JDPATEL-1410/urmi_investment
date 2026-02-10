import { motion } from 'framer-motion';
import { useState } from 'react';
import { testimonials } from '../data/content';
import { FcGoogle } from 'react-icons/fc';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const googleReviewUrl = "https://share.google/pqcBlLuMOAAST0hfq";

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Side: Info & Google Badge */}
                    <div className="lg:col-span-5 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-soft-sm border border-neutral-100 text-sm font-semibold text-primary mb-4">
                                <span className="mr-2">Trusted by 1000+ Clients</span>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} className="w-3 h-3" />)}
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
                                What Our Clients <span className="text-primary italic">Say About Us</span>
                            </h2>
                            <p className="text-lg text-neutral-600">
                                We take pride in delivering exceptional financial solutions. See why we're rated one of the most trusted investment partners in the region.
                            </p>

                            {/* Google Rating Badge */}
                            <motion.a
                                href={googleReviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center p-6 bg-white rounded-2xl shadow-soft-xl border border-neutral-100 group transition-all"
                            >
                                <div className="p-3 bg-neutral-50 rounded-xl mr-4 group-hover:bg-white transition-colors">
                                    <FcGoogle className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="flex items-center mb-1">
                                        <span className="text-xl font-bold text-neutral-900 mr-2">4.9</span>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral-500 font-medium">Google Reviews Summary</p>
                                    <span className="text-xs text-primary font-bold group-hover:underline mt-1 inline-block">View All Reviews →</span>
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Side: Slider */}
                    <div className="lg:col-span-7">
                        <div className="relative">
                            {/* Floating Icon */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 z-20">
                                <FaQuoteLeft className="w-5 h-5" />
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-3xl shadow-soft-2xl p-8 md:p-12 border border-neutral-50"
                                >
                                    {/* Stars */}
                                    <div className="flex mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <FaStar key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-xl md:text-2xl text-neutral-700 font-medium italic mb-10 leading-relaxed min-h-[120px]">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    {/* Author & CTA */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-neutral-100">
                                        <div className="flex items-center">
                                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-green rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg shadow-primary/20">
                                                {testimonials[currentIndex].name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-neutral-900 text-xl">
                                                    {testimonials[currentIndex].name}
                                                </div>
                                                {testimonials[currentIndex].designation && (
                                                    <div className="text-primary font-semibold text-sm">
                                                        {testimonials[currentIndex].designation}
                                                    </div>
                                                )}
                                                <div className="flex items-center mt-1 text-neutral-400 text-xs uppercase tracking-wider font-bold">
                                                    <FcGoogle className="w-3 h-3 mr-1" /> Verified Review
                                                </div>
                                            </div>
                                        </div>

                                        <a
                                            href={googleReviewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary py-3 px-6 text-sm"
                                        >
                                            Write a Review
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Slider Navigation */}
                            <div className="flex items-center space-x-4 mt-8 justify-center lg:justify-start">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-12 h-12 bg-white rounded-xl shadow-soft border border-neutral-100 flex items-center justify-center text-neutral-600 hover:text-primary hover:border-primary transition-all"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-8' : 'bg-neutral-200 w-2'}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextTestimonial}
                                    className="w-12 h-12 bg-white rounded-xl shadow-soft border border-neutral-100 flex items-center justify-center text-neutral-600 hover:text-primary hover:border-primary transition-all"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;

