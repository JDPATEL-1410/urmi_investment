import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import toolsHeader from '../assets/tools-header.png';

const UsefulLinks = () => {
    const linkCategories = [
        {
            title: 'Regulatory Bodies',
            links: [
                { name: 'SEBI - Securities and Exchange Board of India', url: 'https://www.sebi.gov.in/', desc: 'Market regulator' },
                { name: 'AMFI - Association of Mutual Funds in India', url: 'https://www.amfiindia.com/', desc: 'Mutual fund industry body' },
                { name: 'IRDAI - Insurance Regulatory Authority', url: 'https://www.irdai.gov.in/', desc: 'Insurance regulator' },
                { name: 'RBI - Reserve Bank of India', url: 'https://www.rbi.org.in/', desc: 'Central bank' }
            ]
        },
        {
            title: 'Stock Exchanges',
            links: [
                { name: 'BSE - Bombay Stock Exchange', url: 'https://www.bseindia.com/', desc: 'Asia\'s oldest stock exchange' },
                { name: 'NSE - National Stock Exchange', url: 'https://www.nseindia.com/', desc: 'Leading stock exchange' }
            ]
        },
        {
            title: 'Mutual Fund Resources',
            links: [
                { name: 'Value Research', url: 'https://www.valueresearchonline.com/', desc: 'Mutual fund research' },
                { name: 'Morningstar India', url: 'https://www.morningstar.in/', desc: 'Investment research' },
                { name: 'Moneycontrol', url: 'https://www.moneycontrol.com/', desc: 'Financial news & data' }
            ]
        },
        {
            title: 'Tax & Compliance',
            links: [
                { name: 'Income Tax Department', url: 'https://www.incometax.gov.in/', desc: 'Tax filing & information' },
                { name: 'GST Portal', url: 'https://www.gst.gov.in/', desc: 'GST compliance' },
                { name: 'MCA - Ministry of Corporate Affairs', url: 'https://www.mca.gov.in/', desc: 'Corporate compliance' }
            ]
        },
        {
            title: 'Financial Planning Tools',
            links: [
                { name: 'CAMS - Computer Age Management Services', url: 'https://www.camsonline.com/', desc: 'MF transaction services' },
                { name: 'KFintech', url: 'https://www.kfintech.com/', desc: 'MF transaction services' },
                { name: 'NSDL', url: 'https://www.nsdl.co.in/', desc: 'Depository services' },
                { name: 'CDSL', url: 'https://www.cdslindia.com/', desc: 'Depository services' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Useful Financial Links"
                subtitle="Quick access to important financial websites, regulatory bodies, and resources"
                image={toolsHeader}
                badge="Curated Resources"
            />

            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {linkCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="card"
                            >
                                <h3 className="text-xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                                    {category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-4 rounded-lg border border-neutral-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-grow">
                                                    <h4 className="font-semibold text-neutral-900 group-hover:text-primary transition-colors mb-1">
                                                        {link.name}
                                                    </h4>
                                                    <p className="text-sm text-neutral-600">{link.desc}</p>
                                                </div>
                                                <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                        <p className="text-sm text-neutral-700">
                            <strong>Note:</strong> These links are provided for your convenience. Urmi Financial Services is not responsible for the content on external websites. Please verify information independently before making any financial decisions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UsefulLinks;
