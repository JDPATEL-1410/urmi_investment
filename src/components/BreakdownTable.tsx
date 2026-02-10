import { motion } from 'framer-motion';
import { formatCurrency } from '../utils/calculatorUtils';

interface BreakdownTableProps {
    headers: string[];
    rows: (string | number)[][];
    maxHeight?: string;
}

const BreakdownTable: React.FC<BreakdownTableProps> = ({ headers, rows, maxHeight = '400px' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
        >
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Year-by-Year Breakdown</h3>
            <div
                className="overflow-auto rounded-xl border border-neutral-200 shadow-sm"
                style={{ maxHeight }}
            >
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-primary to-primary-dark text-white sticky top-0 z-10">
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-3 text-left text-sm font-semibold"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                        {rows.map((row, rowIndex) => (
                            <motion.tr
                                key={rowIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: rowIndex * 0.02 }}
                                className="hover:bg-neutral-50 transition-colors"
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`px-4 py-3 text-sm ${cellIndex === 0
                                                ? 'font-semibold text-primary'
                                                : 'text-neutral-700'
                                            }`}
                                    >
                                        {typeof cell === 'number' && cellIndex > 0
                                            ? cell.toLocaleString('en-IN')
                                            : cell}
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default BreakdownTable;
