import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { services } from '../data/services';
import { tools } from '../data/content';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Services',
            path: '#',
            dropdown: services.map(s => ({ name: s.title, path: `/services/${s.id}` }))
        },
        {
            name: 'Tools',
            path: '#',
            dropdown: tools.map(t => ({ name: t.title, path: t.link }))
        },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft-lg' : 'bg-white'
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-30">
                    {/* Logo - Responsive Size */}
                    <Link to="/" className="flex items-center space-x-3 z-50">
                        <img src={logo} alt="Urmi Financial Services" className="h-12 w-auto md:h-16 lg:h-20" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.dropdown ? (
                                    <button className="text-neutral-700 hover:text-primary font-medium transition-colors duration-200 flex items-center space-x-1">
                                        <span>{link.name}</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`text-neutral-700 hover:text-primary font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-primary' : ''
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.dropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-soft-lg py-2 border border-neutral-100"
                                        >
                                            {link.name === 'Services' && (
                                                <>
                                                    <Link
                                                        to="/services"
                                                        className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors duration-200 border-b border-neutral-100"
                                                    >
                                                        📋 View All Services
                                                    </Link>
                                                </>
                                            )}
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors duration-200"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <Link
                            to="/login"
                            className="btn-secondary text-sm py-2.5 px-5"
                        >
                            Portfolio Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                        <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Left Side Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
                        >
                            {/* Drawer Header */}
                            <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
                                <img src={logo} alt="Urmi Financial Services" className="h-14 w-auto" />
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                                >
                                    <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Drawer Content */}
                            <div className="p-6 space-y-2">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-lg font-medium flex items-center justify-between"
                                                >
                                                    <span>{link.name}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-4 space-y-1 overflow-hidden"
                                                        >
                                                            {link.name === 'Services' && (
                                                                <Link
                                                                    to="/services"
                                                                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg border-b border-neutral-100 mb-2"
                                                                >
                                                                    📋 View All Services
                                                                </Link>
                                                            )}
                                                            {link.dropdown.map((item) => (
                                                                <Link
                                                                    key={item.path}
                                                                    to={item.path}
                                                                    className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-lg"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className={`block px-4 py-3 rounded-lg font-medium ${location.pathname === link.path
                                                    ? 'bg-primary text-white'
                                                    : 'text-neutral-700 hover:bg-neutral-50'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <Link
                                    to="/login"
                                    className="block w-full text-center btn-secondary mt-4"
                                >
                                    Portfolio Login
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
