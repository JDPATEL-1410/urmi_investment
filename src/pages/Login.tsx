import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-soft-xl border border-neutral-100 z-10"
            >
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-900">
                        Portfolio Login
                    </h2>
                    <p className="mt-2 text-center text-sm text-neutral-600">
                        Access your investments with ease
                    </p>
                </div>
                
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-neutral-700 mb-1">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-neutral-300 placeholder-neutral-500 text-neutral-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-all"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-neutral-300 placeholder-neutral-500 text-neutral-900 rounded-xl focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-all"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary hover:text-primary-dark">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-lg shadow-primary/20"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-neutral-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-neutral-500">Or use our external portal</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <a
                            href="https://www.urmifinserve.com/login.php#loginsection"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex justify-center py-3 px-4 border border-neutral-300 rounded-xl shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 transition-all"
                        >
                            Go to urmifinserve.com Portal
                        </a>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-neutral-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-bold text-primary hover:text-primary-dark">
                        Sign up for free
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
