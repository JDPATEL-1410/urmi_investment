import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    icon: string;
    index: number;
}

const ServiceCard = ({ id, title, description, icon, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card card-hover group"
        >
            <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 to-accent-green/10 rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl">{icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-xl font-bold text-neutral-900 mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6 flex-grow line-clamp-3">
                    {description}
                </p>

                {/* Learn More Link */}
                <Link
                    to={`/services/${id}`}
                    className="inline-flex items-center text-sm md:text-base text-primary font-semibold hover:text-primary-dark transition-colors group"
                >
                    Learn More
                    <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
