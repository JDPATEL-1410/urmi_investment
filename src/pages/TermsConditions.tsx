import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import termsConditionsImage from '../assets/images/terms-conditions.png';

const TermsConditions = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: [
                {
                    subtitle: "",
                    text: "By accessing and using the services of Urmi Financial Services Pvt Ltd ('Company', 'we', 'us', or 'our'), you ('Client', 'you', or 'your') accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services or website."
                }
            ]
        },
        {
            title: "2. Services Provided",
            content: [
                {
                    subtitle: "Financial Advisory Services",
                    text: "We provide financial planning, investment advisory, and wealth management services. Our services include but are not limited to mutual fund distribution, insurance advisory, portfolio management guidance, and financial goal planning."
                },
                {
                    subtitle: "Distribution Services",
                    text: "We act as authorized distributors for various Asset Management Companies (AMCs), insurance companies, and other financial product providers. We facilitate transactions on behalf of our clients with these institutions."
                },
                {
                    subtitle: "Educational Content",
                    text: "We provide financial calculators, educational resources, market insights, and informational content through our website and communications. This content is for informational purposes only and should not be considered as personalized investment advice."
                }
            ]
        },
        {
            title: "3. Client Obligations",
            content: [
                {
                    subtitle: "Accurate Information",
                    text: "You agree to provide accurate, complete, and current information about yourself, your financial situation, investment objectives, and risk tolerance. You must promptly update us of any material changes to this information."
                },
                {
                    subtitle: "KYC Compliance",
                    text: "You agree to complete all Know Your Customer (KYC) requirements as mandated by SEBI and other regulatory authorities. This includes providing necessary documents such as PAN card, address proof, bank details, and other required documentation."
                },
                {
                    subtitle: "Investment Decisions",
                    text: "While we provide recommendations and advice, the final investment decision rests with you. You acknowledge that you are responsible for your investment decisions and their outcomes."
                },
                {
                    subtitle: "Account Security",
                    text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
                }
            ]
        },
        {
            title: "4. Investment Risks and Disclaimers",
            content: [
                {
                    subtitle: "Market Risks",
                    text: "All investments are subject to market risks. The value of investments can go up or down, and past performance is not indicative of future results. You may not recover the full amount invested."
                },
                {
                    subtitle: "No Guaranteed Returns",
                    text: "We do not guarantee any specific returns or outcomes from investments. Any projections, forecasts, or illustrations provided are based on assumptions and are subject to market conditions and other factors beyond our control."
                },
                {
                    subtitle: "Suitability",
                    text: "While we strive to recommend suitable investment products based on your risk profile and financial goals, you acknowledge that you have independently evaluated the suitability of any investment before proceeding."
                },
                {
                    subtitle: "Third-Party Products",
                    text: "We distribute products from third-party providers (AMCs, insurance companies, etc.). We are not responsible for the performance of these products or the actions of these third parties. You should read all product-related documents carefully before investing."
                }
            ]
        },
        {
            title: "5. Fees and Charges",
            content: [
                {
                    subtitle: "Commission Structure",
                    text: "We earn commissions from product providers (AMCs, insurance companies) for distributing their products. These commissions are disclosed in our Commission Disclosure document and do not result in additional charges to you beyond the standard product fees."
                },
                {
                    subtitle: "Advisory Fees",
                    text: "For certain advisory services, we may charge separate advisory fees. These fees will be clearly communicated and agreed upon before providing such services."
                },
                {
                    subtitle: "Transaction Charges",
                    text: "Certain transactions may be subject to charges levied by third parties (AMCs, payment gateways, etc.). These charges will be disclosed at the time of transaction."
                },
                {
                    subtitle: "Changes to Fees",
                    text: "We reserve the right to modify our fee structure with prior notice to clients. Continued use of our services after such changes constitutes acceptance of the new fee structure."
                }
            ]
        },
        {
            title: "6. Regulatory Compliance",
            content: [
                {
                    subtitle: "SEBI Registration",
                    text: "Urmi Financial Services Pvt Ltd is registered with the Securities and Exchange Board of India (SEBI) as a [Mutual Fund Distributor/Investment Adviser - specify your registration]. We comply with all applicable SEBI regulations and guidelines."
                },
                {
                    subtitle: "AMFI Registration",
                    text: "Our representatives are certified by the Association of Mutual Funds in India (AMFI) and adhere to the AMFI Code of Conduct."
                },
                {
                    subtitle: "Anti-Money Laundering",
                    text: "We comply with all anti-money laundering (AML) and counter-terrorism financing (CTF) regulations. We reserve the right to refuse service or report suspicious transactions to appropriate authorities."
                },
                {
                    subtitle: "Data Protection",
                    text: "We comply with the Information Technology Act, 2000 and related rules regarding data protection and privacy. Please refer to our Privacy Policy for details on how we handle your personal information."
                }
            ]
        },
        {
            title: "7. Limitation of Liability",
            content: [
                {
                    subtitle: "Service Limitations",
                    text: "We provide our services on an 'as is' and 'as available' basis. We do not warrant that our services will be uninterrupted, error-free, or completely secure."
                },
                {
                    subtitle: "Investment Losses",
                    text: "We shall not be liable for any investment losses, opportunity costs, or consequential damages arising from market movements, investment decisions, or the performance of third-party products."
                },
                {
                    subtitle: "Technical Issues",
                    text: "We are not liable for losses or damages arising from technical failures, internet connectivity issues, system downtime, or other technological problems beyond our reasonable control."
                },
                {
                    subtitle: "Third-Party Actions",
                    text: "We are not responsible for the actions, omissions, or defaults of third-party service providers, including AMCs, registrars, payment processors, or other intermediaries."
                },
                {
                    subtitle: "Maximum Liability",
                    text: "In no event shall our total liability to you exceed the fees paid by you to us in the 12 months preceding the claim."
                }
            ]
        },
        {
            title: "8. Intellectual Property",
            content: [
                {
                    subtitle: "Ownership",
                    text: "All content on our website, including text, graphics, logos, images, software, and other materials, is the property of Urmi Financial Services Pvt Ltd or its licensors and is protected by copyright and other intellectual property laws."
                },
                {
                    subtitle: "Limited License",
                    text: "We grant you a limited, non-exclusive, non-transferable license to access and use our website and services for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission."
                },
                {
                    subtitle: "Trademarks",
                    text: "All trademarks, service marks, and trade names used on our website are the property of their respective owners."
                }
            ]
        },
        {
            title: "9. Termination",
            content: [
                {
                    subtitle: "Termination by Client",
                    text: "You may terminate your relationship with us at any time by providing written notice. Termination will not affect existing investments or obligations."
                },
                {
                    subtitle: "Termination by Company",
                    text: "We reserve the right to terminate or suspend your access to our services at any time, with or without cause, including for violation of these Terms and Conditions, fraudulent activity, or regulatory requirements."
                },
                {
                    subtitle: "Effect of Termination",
                    text: "Upon termination, your right to use our services will immediately cease. We will provide assistance in transferring your investments to another advisor or directly to the AMCs, subject to applicable regulations and procedures."
                }
            ]
        },
        {
            title: "10. Confidentiality",
            content: [
                {
                    subtitle: "",
                    text: "We maintain strict confidentiality of all client information in accordance with our Privacy Policy and applicable regulations. We will not disclose your personal or financial information to third parties except as required by law, with your consent, or as necessary to provide our services."
                }
            ]
        },
        {
            title: "11. Communication and Notices",
            content: [
                {
                    subtitle: "Electronic Communication",
                    text: "You consent to receive communications from us electronically, including via email, SMS, WhatsApp, or through our website. Electronic communications satisfy any legal requirement for written communication."
                },
                {
                    subtitle: "Contact Information",
                    text: "You agree to keep your contact information current and to notify us promptly of any changes. We are not responsible for communications sent to outdated contact information."
                },
                {
                    subtitle: "Official Notices",
                    text: "Official notices will be sent to the email address or postal address provided in your account. Such notices are deemed received within 24 hours of electronic delivery or 3 business days of postal delivery."
                }
            ]
        },
        {
            title: "12. Dispute Resolution",
            content: [
                {
                    subtitle: "Grievance Redressal",
                    text: "If you have any complaints or grievances, please contact our Grievance Officer at the contact details provided below. We will endeavor to resolve your complaint within 30 days."
                },
                {
                    subtitle: "Arbitration",
                    text: "Any disputes arising out of or relating to these Terms and Conditions shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in [City], India, and the language of arbitration shall be English."
                },
                {
                    subtitle: "Jurisdiction",
                    text: "These Terms and Conditions shall be governed by the laws of India. Subject to arbitration, the courts of [City], India shall have exclusive jurisdiction over any disputes."
                }
            ]
        },
        {
            title: "13. Amendments",
            content: [
                {
                    subtitle: "",
                    text: "We reserve the right to modify these Terms and Conditions at any time. We will notify you of material changes via email or by posting a notice on our website. Your continued use of our services after such changes constitutes acceptance of the modified terms. We recommend reviewing these Terms and Conditions periodically."
                }
            ]
        },
        {
            title: "14. Severability",
            content: [
                {
                    subtitle: "",
                    text: "If any provision of these Terms and Conditions is found to be invalid or unenforceable by a court of law, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the intent of the original provision."
                }
            ]
        },
        {
            title: "15. Entire Agreement",
            content: [
                {
                    subtitle: "",
                    text: "These Terms and Conditions, together with our Privacy Policy and Commission Disclosure document, constitute the entire agreement between you and Urmi Financial Services Pvt Ltd regarding the use of our services and supersede all prior agreements and understandings."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Terms & Conditions"
                subtitle="Please read these terms carefully before using our services"
                badge="Last Updated: December 10, 2025"
                image={termsConditionsImage}
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
                            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                                Welcome to <strong>Urmi Financial Services Pvt Ltd</strong>. These Terms and Conditions govern your use of our website and services. Please read them carefully.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and clients of our services.
                            </p>
                        </div>
                    </motion.div>

                    {/* Terms Sections */}
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
                        <h3 className="text-2xl font-bold mb-6">Contact & Grievance Officer</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-semibold mb-2">For General Inquiries</p>
                                <p className="text-neutral-100">
                                    Email: <a href="mailto:info@urmifinancial.com" className="underline hover:text-accent-green transition-colors">info@urmifinancial.com</a>
                                </p>
                                <p className="text-neutral-100">
                                    Phone: <a href="tel:+911234567890" className="underline hover:text-accent-green transition-colors">+91 123 456 7890</a>
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Grievance Officer</p>
                                <p className="text-neutral-100">
                                    Name: [Grievance Officer Name]<br />
                                    Email: <a href="mailto:grievance@urmifinancial.com" className="underline hover:text-accent-green transition-colors">grievance@urmifinancial.com</a><br />
                                    Phone: <a href="tel:+911234567890" className="underline hover:text-accent-green transition-colors">+91 123 456 7890</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Important Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 bg-accent-red/5 border border-accent-red/20 rounded-xl"
                    >
                        <h4 className="text-lg font-bold text-accent-red mb-3 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Important Disclaimer
                        </h4>
                        <p className="text-sm text-neutral-700">
                            <strong>Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.</strong> Past performance is not indicative of future returns. The information provided is for general information purposes only and should not be construed as investment advice. Please consult with a qualified financial advisor before making any investment decisions.
                        </p>
                    </motion.div>

                    {/* Regulatory Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200"
                    >
                        <p className="text-sm text-neutral-600 text-center">
                            <strong>Regulatory Information:</strong> Urmi Financial Services Pvt Ltd | SEBI Registration No: [Your SEBI Registration Number] | AMFI Registration No: [Your AMFI ARN] | Registered Office: [Your Registered Office Address]
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsConditions;
