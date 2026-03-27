import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-soft-xl border border-neutral-100 z-10"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-neutral-900">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600">
                        Start your journey to financial prosperity today
                    </p>
                </div>
                
                <form className="mt-8 space-y-4" action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                                First Name
                            </label>
                            <input id="first-name" type="text" required className="input-field py-3 px-4 w-full rounded-xl border border-neutral-300 focus:ring-primary focus:border-primary" placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                                Last Name
                            </label>
                            <input id="last-name" type="text" required className="input-field py-3 px-4 w-full rounded-xl border border-neutral-300 focus:ring-primary focus:border-primary" placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                            Email Address
                        </label>
                        <input id="email" type="email" required className="input-field py-3 px-4 w-full rounded-xl border border-neutral-300 focus:ring-primary focus:border-primary" placeholder="john@example.com" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                            Phone Number
                        </label>
                        <input id="phone" type="tel" required className="input-field py-3 px-4 w-full rounded-xl border border-neutral-300 focus:ring-primary focus:border-primary" placeholder="+91 98765 43210" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                            Create Password
                        </label>
                        <input id="password" type="password" required className="input-field py-3 px-4 w-full rounded-xl border border-neutral-300 focus:ring-primary focus:border-primary" placeholder="••••••••" />
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" required className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="text-neutral-600">
                                I agree to the <Link to="/terms-conditions" className="text-primary font-bold">Terms & Conditions</Link> and <Link to="/privacy-policy" className="text-primary font-bold">Privacy Policy</Link>
                            </label>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-neutral-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-primary hover:text-primary-dark">
                        Log in here
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Signup;
