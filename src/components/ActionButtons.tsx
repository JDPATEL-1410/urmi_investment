import { motion } from 'framer-motion';
import { FaDownload, FaShare, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

interface ActionButtonsProps {
    onDownloadPDF: () => void;
    onShare: () => void;
    className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onDownloadPDF, onShare, className = '' }) => {
    const [showCopied, setShowCopied] = useState(false);

    const handleShare = async () => {
        await onShare();
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`flex flex-wrap gap-4 justify-center ${className}`}
        >
            <button
                onClick={onDownloadPDF}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
                <FaDownload className="text-sm" />
                Download PDF Report
            </button>

            <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-200"
            >
                {showCopied ? (
                    <>
                        <FaCheck className="text-sm" />
                        Link Copied!
                    </>
                ) : (
                    <>
                        <FaShare className="text-sm" />
                        Share Calculation
                    </>
                )}
            </button>
        </motion.div>
    );
};

export default ActionButtons;
