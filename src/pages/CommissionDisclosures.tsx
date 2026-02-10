import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import commissionDisclosuresImage from '../assets/images/commission-disclosures.png';

const CommissionDisclosures = () => {
    const commissionStructure = [
        {
            category: "Equity Mutual Funds",
            products: [
                {
                    type: "Regular Plans",
                    upfront: "Up to 1.00% of investment amount",
                    trail: "Up to 1.00% per annum of AUM",
                    notes: "Commission varies by AMC and scheme"
                }
            ]
        },
        {
            category: "Debt Mutual Funds",
            products: [
                {
                    type: "Regular Plans",
                    upfront: "Up to 0.75% of investment amount",
                    trail: "Up to 0.75% per annum of AUM",
                    notes: "Lower commission for liquid and ultra-short duration funds"
                }
            ]
        },
        {
            category: "Hybrid Mutual Funds",
            products: [
                {
                    type: "Regular Plans",
                    upfront: "Up to 0.85% of investment amount",
                    trail: "Up to 0.85% per annum of AUM",
                    notes: "Commission based on equity-debt allocation"
                }
            ]
        },
        {
            category: "ELSS (Tax Saving Funds)",
            products: [
                {
                    type: "Regular Plans",
                    upfront: "Up to 1.00% of investment amount",
                    trail: "Up to 0.50% per annum of AUM",
                    notes: "Subject to 3-year lock-in period"
                }
            ]
        },
        {
            category: "Insurance Products",
            products: [
                {
                    type: "Term Insurance",
                    upfront: "Up to 25% of first year premium",
                    trail: "Up to 5% of renewal premiums",
                    notes: "Commission structure varies by insurer"
                },
                {
                    type: "ULIP (Unit Linked Insurance Plans)",
                    upfront: "Up to 20% of first year premium",
                    trail: "Up to 7.5% of renewal premiums",
                    notes: "Subject to IRDAI regulations"
                },
                {
                    type: "Traditional Life Insurance",
                    upfront: "Up to 15% of first year premium",
                    trail: "Up to 5% of renewal premiums",
                    notes: "Includes endowment and money-back policies"
                },
                {
                    type: "Health Insurance",
                    upfront: "Up to 15% of premium",
                    trail: "Up to 10% of renewal premiums",
                    notes: "Commission on individual and family floater plans"
                }
            ]
        },
        {
            category: "Fixed Income Products",
            products: [
                {
                    type: "Fixed Deposits",
                    upfront: "Up to 0.25% of deposit amount",
                    trail: "N/A",
                    notes: "One-time commission from banks/NBFCs"
                },
                {
                    type: "Bonds & NCDs",
                    upfront: "Up to 0.50% of investment amount",
                    trail: "N/A",
                    notes: "Commission varies by issuer and tenure"
                }
            ]
        },
        {
            category: "Government Schemes",
            products: [
                {
                    type: "PPF, NSC, SCSS",
                    upfront: "No commission",
                    trail: "No commission",
                    notes: "We provide guidance as a complimentary service"
                },
                {
                    type: "NPS (National Pension System)",
                    upfront: "Up to 0.25% of contribution",
                    trail: "N/A",
                    notes: "As per PFRDA guidelines"
                }
            ]
        }
    ];

    const importantPoints = [
        {
            title: "No Additional Cost to Clients",
            description: "The commissions we receive are paid by the product manufacturers (AMCs, insurance companies, etc.) and are already factored into the product pricing. You do not pay any additional fees for our distribution services."
        },
        {
            title: "Direct vs Regular Plans",
            description: "Mutual funds offer both Direct and Regular plans. Direct plans have lower expense ratios as they don't include distributor commissions. Regular plans, which we distribute, have slightly higher expense ratios that include our commission. We can help you choose between Direct and Regular plans based on the value of our advisory services."
        },
        {
            title: "Trail Commission",
            description: "Trail commission is an ongoing commission paid annually based on the Assets Under Management (AUM) you maintain in the investment. This incentivizes us to provide continuous service and support throughout your investment journey."
        },
        {
            title: "Upfront Commission",
            description: "Upfront commission is a one-time payment received at the time of investment. This is typically a percentage of the investment amount and varies by product type and AMC."
        },
        {
            title: "Commission Variations",
            description: "Actual commission rates may vary based on the specific AMC, insurance company, investment amount, scheme type, and promotional offers. The rates mentioned above are indicative maximum ranges."
        },
        {
            title: "Transparency Commitment",
            description: "We are committed to full transparency in our commission structure. If you have questions about the specific commission we earn on any product, please feel free to ask us directly."
        }
    ];

    const conflictOfInterest = [
        {
            title: "Product Recommendations",
            description: "While we earn commissions from product providers, our recommendations are based on your financial goals, risk profile, and investment needs. We follow a client-first approach and recommend products that are suitable for you, regardless of commission differences."
        },
        {
            title: "Multiple Product Options",
            description: "We offer products from multiple AMCs and insurance providers, giving you a wide range of options. We do not have exclusive arrangements that would limit your choices."
        },
        {
            title: "Regular vs Direct Plans",
            description: "We disclose that Regular plans pay us commissions while Direct plans do not. We will help you understand the cost-benefit analysis of both options and let you make an informed decision."
        },
        {
            title: "Switching Recommendations",
            description: "We do not recommend frequent switching between schemes or products to generate additional commissions. Any switch recommendation is made in your best interest based on performance, market conditions, or changes in your financial situation."
        },
        {
            title: "Fee-Based Advisory",
            description: "For clients who prefer not to invest through commission-based products, we offer fee-based advisory services where you pay us directly for our advice. This eliminates any potential conflict of interest from commissions."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Commission Disclosures"
                subtitle="Transparency in how we earn from the financial products we distribute"
                badge="Last Updated: December 10, 2025"
                image={commissionDisclosuresImage}
            />

            <section className="py-16 md:py-24">
                <div className="section-container max-w-6xl">
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="bg-gradient-to-br from-primary/5 to-accent-green/5 rounded-2xl p-8 border border-primary/10">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Commitment to Transparency</h2>
                            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                                At <strong>Urmi Financial Services Pvt Ltd</strong>, we believe in complete transparency regarding how we are compensated for our services. This document discloses the commissions and fees we receive from various financial product providers.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                As a SEBI-registered distributor and AMFI-certified advisor, we earn commissions from Asset Management Companies (AMCs), insurance companies, and other financial institutions when you invest through us. This disclosure helps you understand our compensation structure and make informed decisions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Commission Structure Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
                            <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent-green rounded-full mr-4"></span>
                            Commission Structure by Product Category
                        </h2>

                        <div className="space-y-8">
                            {commissionStructure.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card"
                                >
                                    <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-neutral-50 border-b border-neutral-200">
                                                    <th className="text-left py-3 px-4 font-semibold text-neutral-700">Product Type</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-neutral-700">Upfront Commission</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-neutral-700">Trail Commission</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-neutral-700">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {category.products.map((product, idx) => (
                                                    <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                                                        <td className="py-3 px-4 font-medium text-neutral-800">{product.type}</td>
                                                        <td className="py-3 px-4 text-neutral-600">{product.upfront}</td>
                                                        <td className="py-3 px-4 text-neutral-600">{product.trail}</td>
                                                        <td className="py-3 px-4 text-sm text-neutral-500">{product.notes}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Important Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
                            <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent-green rounded-full mr-4"></span>
                            Important Points to Understand
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {importantPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card card-hover"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-neutral-900 mb-2">{point.title}</h3>
                                            <p className="text-neutral-600 leading-relaxed">{point.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Conflict of Interest */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
                            <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent-green rounded-full mr-4"></span>
                            Managing Conflicts of Interest
                        </h2>

                        <div className="space-y-6">
                            {conflictOfInterest.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-accent-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                                            <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Regulatory Compliance */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="card bg-gradient-to-br from-primary to-primary-dark text-white">
                            <h2 className="text-2xl font-bold mb-6">Regulatory Compliance & Standards</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-3 text-neutral-100">SEBI Regulations</h3>
                                    <p className="text-neutral-100 text-sm leading-relaxed">
                                        Our commission structure complies with SEBI (Mutual Fund) Regulations and SEBI (Investment Advisers) Regulations. We adhere to all disclosure requirements mandated by the regulatory authorities.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-3 text-neutral-100">AMFI Code of Conduct</h3>
                                    <p className="text-neutral-100 text-sm leading-relaxed">
                                        We follow the AMFI Code of Conduct for Registered Mutual Fund Distributors, which includes guidelines on ethical practices, client-first approach, and transparent disclosure of commissions.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-3 text-neutral-100">IRDAI Guidelines</h3>
                                    <p className="text-neutral-100 text-sm leading-relaxed">
                                        For insurance products, we comply with IRDAI (Insurance Regulatory and Development Authority of India) regulations regarding commission caps and disclosure requirements.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-3 text-neutral-100">Annual Disclosure</h3>
                                    <p className="text-neutral-100 text-sm leading-relaxed">
                                        We provide annual statements to our clients showing the total commissions earned on their investments, as required by regulatory guidelines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Your Rights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="card bg-accent-green/5 border border-accent-green/20">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Rights as a Client</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-neutral-700">
                                        <strong>Right to Information:</strong> You have the right to ask for specific commission details on any product we recommend or you invest in.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-neutral-700">
                                        <strong>Right to Choose:</strong> You can choose between Regular plans (with our commission) and Direct plans (without commission) after understanding the value proposition.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-neutral-700">
                                        <strong>Right to Fee-Based Advisory:</strong> You can opt for fee-based advisory services where you pay us directly instead of through product commissions.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <svg className="w-6 h-6 text-accent-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-neutral-700">
                                        <strong>Right to Annual Statement:</strong> You will receive an annual statement showing all commissions earned on your investments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="card">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Questions About Our Commissions?</h2>
                            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                                We encourage you to ask questions about our commission structure. Transparency is the foundation of our client relationships, and we're happy to provide detailed information about how we're compensated.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="mailto:info@urmifinancial.com" className="btn-primary">
                                    Email Us
                                </a>
                                <a href="tel:+911234567890" className="btn-secondary">
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Disclaimer */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200"
                    >
                        <p className="text-sm text-neutral-600 text-center">
                            <strong>Disclaimer:</strong> The commission rates mentioned above are indicative and subject to change based on AMC/insurance company policies, regulatory changes, and product-specific terms. Actual commissions may vary. This disclosure is provided in compliance with SEBI and IRDAI regulations. For specific commission details on any product, please contact us directly.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CommissionDisclosures;
