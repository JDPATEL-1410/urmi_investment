import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import privacyPolicyImage from '../assets/images/privacy-policy.png';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "We collect personal information that you provide to us, including but not limited to your name, email address, phone number, postal address, PAN number, bank account details, and other financial information necessary to provide our services."
                },
                {
                    subtitle: "Usage Information",
                    text: "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, referring URLs, and pages visited."
                },
                {
                    subtitle: "Financial Information",
                    text: "With your consent, we collect financial information including investment preferences, risk profile, income details, and investment goals to provide personalized financial advisory services."
                }
            ]
        },
        {
            title: "2. How We Use Your Information",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your information to provide, maintain, and improve our financial services, process transactions, and communicate with you about your investments and account."
                },
                {
                    subtitle: "Personalization",
                    text: "We analyze your information to understand your financial needs and provide personalized investment recommendations and financial planning advice."
                },
                {
                    subtitle: "Compliance & Legal",
                    text: "We use your information to comply with legal obligations, including KYC (Know Your Customer) requirements, anti-money laundering regulations, and other regulatory requirements under SEBI and other financial authorities."
                },
                {
                    subtitle: "Communication",
                    text: "We may use your contact information to send you service updates, market insights, investment opportunities, and promotional materials. You can opt-out of marketing communications at any time."
                }
            ]
        },
        {
            title: "3. Information Sharing and Disclosure",
            content: [
                {
                    subtitle: "Service Providers",
                    text: "We may share your information with third-party service providers who assist us in operating our business, including AMCs (Asset Management Companies), registrars, payment processors, and technology providers."
                },
                {
                    subtitle: "Regulatory Authorities",
                    text: "We may disclose your information to regulatory authorities such as SEBI, RBI, tax authorities, and other government agencies as required by law or regulation."
                },
                {
                    subtitle: "Business Transfers",
                    text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections."
                },
                {
                    subtitle: "Consent-Based Sharing",
                    text: "We will not share your personal information with third parties for their marketing purposes without your explicit consent."
                }
            ]
        },
        {
            title: "4. Data Security",
            content: [
                {
                    subtitle: "Security Measures",
                    text: "We implement industry-standard security measures including encryption, secure servers, firewalls, and access controls to protect your personal and financial information from unauthorized access, disclosure, or misuse."
                },
                {
                    subtitle: "Data Retention",
                    text: "We retain your information for as long as necessary to provide our services and comply with legal obligations. Financial records are maintained as per regulatory requirements, typically for a minimum of 7 years."
                },
                {
                    subtitle: "Your Responsibility",
                    text: "You are responsible for maintaining the confidentiality of your account credentials and should notify us immediately of any unauthorized access to your account."
                }
            ]
        },
        {
            title: "5. Your Rights and Choices",
            content: [
                {
                    subtitle: "Access and Correction",
                    text: "You have the right to access, review, and request corrections to your personal information held by us."
                },
                {
                    subtitle: "Data Portability",
                    text: "You may request a copy of your personal information in a structured, commonly used format."
                },
                {
                    subtitle: "Opt-Out",
                    text: "You can opt-out of receiving marketing communications by clicking the unsubscribe link in our emails or contacting us directly."
                },
                {
                    subtitle: "Account Deletion",
                    text: "You may request deletion of your account and personal information, subject to our legal obligations to retain certain records."
                }
            ]
        },
        {
            title: "6. Cookies and Tracking Technologies",
            content: [
                {
                    subtitle: "Cookie Usage",
                    text: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences."
                },
                {
                    subtitle: "Analytics",
                    text: "We use third-party analytics services to understand how visitors interact with our website and improve our services."
                }
            ]
        },
        {
            title: "7. Third-Party Links",
            content: [
                {
                    subtitle: "",
                    text: "Our website may contain links to third-party websites, including AMC websites and partner platforms. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information."
                }
            ]
        },
        {
            title: "8. Children's Privacy",
            content: [
                {
                    subtitle: "",
                    text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately."
                }
            ]
        },
        {
            title: "9. Changes to This Privacy Policy",
            content: [
                {
                    subtitle: "",
                    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the 'Last Updated' date. Your continued use of our services after such changes constitutes acceptance of the updated policy."
                }
            ]
        },
        {
            title: "10. Contact Us",
            content: [
                {
                    subtitle: "",
                    text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Privacy Policy"
                subtitle="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
                badge="Last Updated: December 10, 2025"
                image={privacyPolicyImage}
            />

            <section className="py-16 md:py-24">
                <div className="section-container max-w-5xl">
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="bg-gradient-to-br from-primary/5 to-accent-green/5 rounded-2xl p-8 border border-primary/10">
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                At <strong>Urmi Financial Services Pvt Ltd</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. By accessing or using our services, you agree to the terms of this Privacy Policy.
                            </p>
                        </div>
                    </motion.div>

                    {/* Policy Sections */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent-green rounded-full mr-4"></span>
                                    {section.title}
                                </h2>
                                <div className="space-y-6 ml-6">
                                    {section.content.map((item, idx) => (
                                        <div key={idx}>
                                            {item.subtitle && (
                                                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                                                    {item.subtitle}
                                                </h3>
                                            )}
                                            <p className="text-neutral-600 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-semibold mb-2">Urmi Financial Services Pvt Ltd</p>
                                <p className="text-neutral-100">
                                    Email: <a href="mailto:info@urmifinancial.com" className="underline hover:text-accent-green transition-colors">info@urmifinancial.com</a>
                                </p>
                                <p className="text-neutral-100">
                                    Phone: <a href="tel:+911234567890" className="underline hover:text-accent-green transition-colors">+91 123 456 7890</a>
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Office Address</p>
                                <p className="text-neutral-100">
                                    [Your Office Address]<br />
                                    [City, State - PIN Code]<br />
                                    India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Regulatory Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200"
                    >
                        <p className="text-sm text-neutral-600 text-center">
                            <strong>Regulatory Compliance:</strong> Urmi Financial Services Pvt Ltd is registered with SEBI and complies with all applicable data protection and privacy regulations in India, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
