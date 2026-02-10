import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    image?: string;
    badge?: string;
}

const PageHeader = ({ title, subtitle, image, badge }: PageHeaderProps) => {
    return (
        <section className="relative bg-gradient-to-br from-primary/5 to-accent-green/5 overflow-hidden">
            <div className="section-container">
                <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-12 items-center py-12 lg:py-16`}>
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`space-y-4 ${image ? 'order-2 lg:order-1' : 'text-center mx-auto max-w-4xl'}`}
                    >
                        {badge && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-medium text-primary"
                            >
                                {badge}
                            </motion.div>
                        )}

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                            {title}
                        </h1>

                        <p className="text-lg text-neutral-600 leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>

                    {/* Right Image - Only render if image is provided */}
                    {image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-64 lg:h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
