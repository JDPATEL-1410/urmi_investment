import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopInfoBar from './components/TopInfoBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogSection from './components/BlogSection';

import Calculators from './pages/Calculators';
import SIPCalculator from './pages/SIPCalculator';
import LumpsumCalculator from './pages/LumpsumCalculator';
import EMICalculator from './pages/EMICalculator';
import FDCalculator from './pages/FDCalculator';
import RetirementCalculator from './pages/RetirementCalculator';
import GoalCalculator from './pages/GoalCalculator';
import PPFCalculator from './pages/PPFCalculator';
import NPSCalculator from './pages/NPSCalculator';
import SWPCalculator from './pages/SWPCalculator';
import EducationCalculator from './pages/EducationCalculator';
import MarriageCalculator from './pages/MarriageCalculator';
import HomeCalculator from './pages/HomeCalculator';
import FundPerformance from './pages/FundPerformance';
import FinancialHealthCheckup from './pages/FinancialHealthCheckup';
import RiskProfile from './pages/RiskProfile';
import UsefulLinks from './pages/UsefulLinks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CommissionDisclosures from './pages/CommissionDisclosures';

// Scroll to top on route change
function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTopOnMount />
            <div className="flex flex-col min-h-screen">
                <TopInfoBar />
                <Navbar />
                <main className="flex-grow pt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/:serviceId" element={<ServiceDetail />} />

                        {/* Tools Routes */}
                        <Route path="/tools/calculators" element={<Calculators />} />
                        <Route path="/tools/sip-calculator" element={<SIPCalculator />} />
                        <Route path="/tools/lumpsum-calculator" element={<LumpsumCalculator />} />
                        <Route path="/tools/emi-calculator" element={<EMICalculator />} />
                        <Route path="/tools/fd-calculator" element={<FDCalculator />} />
                        <Route path="/tools/retirement-calculator" element={<RetirementCalculator />} />
                        <Route path="/tools/goal-calculator" element={<GoalCalculator />} />
                        <Route path="/tools/ppf-calculator" element={<PPFCalculator />} />
                        <Route path="/tools/nps-calculator" element={<NPSCalculator />} />
                        <Route path="/tools/swp-calculator" element={<SWPCalculator />} />
                        <Route path="/tools/education-calculator" element={<EducationCalculator />} />
                        <Route path="/tools/marriage-calculator" element={<MarriageCalculator />} />
                        <Route path="/tools/home-calculator" element={<HomeCalculator />} />
                        <Route path="/tools/fund-performance" element={<FundPerformance />} />
                        <Route path="/tools/health-checkup" element={<FinancialHealthCheckup />} />
                        <Route path="/tools/risk-profile" element={<RiskProfile />} />
                        <Route path="/tools/useful-links" element={<UsefulLinks />} />

                        {/* Catch-all for tools to redirect to hub or SIP? Let's default to Calculators hub */}
                        <Route path="/tools/*" element={<Calculators />} />

                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blogSection" element={<BlogSection />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Legal Pages */}
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-conditions" element={<TermsConditions />} />
                        <Route path="/commission-disclosures" element={<CommissionDisclosures />} />

                        <Route path="/login" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
