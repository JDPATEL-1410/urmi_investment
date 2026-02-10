import { motion } from 'framer-motion';

const TopInfoBar = () => {
    const marketData = [
        { name: 'SENSEX', value: '85,712.37', change: '+447.05', changePercent: '(0.52%)', positive: true },
        { name: 'NIFTY 50', value: '26,186.45', change: '+152.7', changePercent: '(0.58%)', positive: true },
        { name: 'GOLD', value: '₹1,30,419', change: '-43', changePercent: '(-0.03%)', positive: false },
        { name: 'SILVER', value: '₹1,83,100', change: '+4,962', changePercent: '(2.71%)', positive: true },
    ];

    return (
        <div className="bg-primary text-white py-2 text-xs">
            <div className="section-container">
                <div className="flex items-center justify-between">
                    {/* Market Ticker */}
                    <div className="hidden md:flex items-center space-x-6 overflow-x-auto">
                        {marketData.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center space-x-2 whitespace-nowrap"
                            >
                                <span className="font-semibold">{item.name}</span>
                                <span className="text-neutral-200">{item.value}</span>
                                <span className={item.positive ? 'text-accent-green' : 'text-accent-red'}>
                                    {item.change} {item.changePercent}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
                        <a
                            href="tel:+919328933841"
                            className="flex items-center space-x-1.5 hover:text-accent-green transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="hidden sm:inline">+91 93289 33841</span>
                        </a>
                        <a
                            href="mailto:care@urmifinserve.com"
                            className="flex items-center space-x-1.5 hover:text-accent-green transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="hidden sm:inline">care@urmifinserve.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopInfoBar;
