import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import contactHeader from '../assets/images/contact-us.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
        consent: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate consent checkbox
        if (!formData.consent) {
            alert('Please provide consent to be contacted.');
            return;
        }

        // Format message for WhatsApp
        const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Mobile:* ${formData.mobile}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Message:* ${formData.message}`;

        // WhatsApp number (without + or spaces)
        const whatsappNumber = '9328933841';

        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');

        // Reset form
        setFormData({
            name: '',
            mobile: '',
            email: '',
            message: '',
            consent: false
        });
    };

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Get In Touch"
                subtitle="Have questions? We're here to help you with all your financial needs"
                image={contactHeader}
                badge="📞 Contact Us"
            />

            {/* Contact Form & Info */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-neutral-700 mb-2">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        required
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        required
                                        checked={formData.consent}
                                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                        className="mt-1 w-5 h-5 text-primary border-neutral-300 rounded focus:ring-primary"
                                    />
                                    <label htmlFor="consent" className="text-sm text-neutral-600">
                                        I consent to being contacted by Urmi Financial Services regarding my inquiry
                                    </label>
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Submit Inquiry
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-neutral-600 mb-8">
                                    Reach out to us through any of the following channels. We're here to assist you with all your financial needs.
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                                    <a href="tel:+919328933841" className="text-primary hover:text-primary-dark">
                                        +91 93289 33841
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                                    <a href="mailto:care@urmifinserve.com" className="text-primary hover:text-primary-dark">
                                        care@urmifinserve.com
                                    </a>
                                </div>
                            </div>

                            {/* Surat Office */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 mb-1">Surat Office</h3>
                                    <p className="text-neutral-600">
                                        806, Eight Floor, Homeland City,<br />
                                        Opp J H Ambani School,<br />
                                        Udhna Magdalla Road, Vesu,<br />
                                        Surat 395007, Gujarat
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/eFANy4fu6ZfETFm97"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-dark text-sm mt-2 inline-block"
                                    >
                                        View on Google Maps →
                                    </a>
                                </div>
                            </div>

                            {/* Bharuch Office */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 mb-1">Bharuch Office</h3>
                                    <p className="text-neutral-600">
                                        24-25 First Floor,<br />
                                        Amardeep Complex,<br />
                                        Falshruti Nagar, Station Road,<br />
                                        Bharuch, Gujarat
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/Lyatfd5Wx5Wbu6wy8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-dark text-sm mt-2 inline-block"
                                    >
                                        View on Google Maps →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-neutral-50">
                <div className="section-container">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
                        Visit Our Offices
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Surat Office Map */}
                        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                            <div className="h-80 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d36625.82100810947!2d72.7635268!3d21.1636051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8be5423ffb%3A0x1576414c0877c525!2sHomeland%20City!5e1!3m2!1sen!2sin!4v1765348011030!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Surat Office Location"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Surat Office</h3>
                                <p className="text-neutral-600 text-sm">806, Eight Floor, Homeland City, Vesu, Surat 395007</p>
                                <a
                                    href="https://maps.app.goo.gl/eFANy4fu6ZfETFm97"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary-dark text-sm mt-2 inline-block font-semibold"
                                >
                                    Open in Google Maps →
                                </a>
                            </div>
                        </div>

                        {/* Bharuch Office Map */}
                        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                            <div className="h-80 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4561.337513894533!2d72.99486530000001!3d21.7030447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020b540033261%3A0x8368703b10848cb!2sAmardeep%20Complex%2C%20GF-24%2C%20Falshurti%20Nagar%20Rd%2C%20Prithvi%20Nagar%2C%20Falshurti%20Nagar%2C%20Moficer%20Jin%20Compound%2C%20Bharuch%2C%20Gujarat%20392001!5e1!3m2!1sen!2sin!4v1765348042897!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Bharuch Office Location"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">Bharuch Office</h3>
                                <p className="text-neutral-600 text-sm">24-25 First Floor, Amardeep Complex, Bharuch</p>
                                <a
                                    href="https://maps.app.goo.gl/Lyatfd5Wx5Wbu6wy8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary-dark text-sm mt-2 inline-block font-semibold"
                                >
                                    Open in Google Maps →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
