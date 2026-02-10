export interface Tool {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
    external?: boolean;
}

export const tools: Tool[] = [
    {
        id: 'financial-calculators',
        title: 'Financial Calculators',
        description: 'Explore our comprehensive suite of financial calculators to plan your future.',
        icon: '🧮',
        link: '/tools/calculators',
        external: false
    },
    {
        id: 'fund-performance',
        title: 'Fund Performance',
        description: 'Track and compare mutual fund performance across different categories and time periods.',
        icon: '📊',
        link: '/tools/fund-performance',
        external: false
    },
    {
        id: 'health-checkup',
        title: 'Financial Health Checkup',
        description: 'Assess your financial health and get personalized recommendations for improvement.',
        icon: '🏥',
        link: '/tools/health-checkup',
        external: false
    },
    {
        id: 'risk-profile',
        title: 'Risk Profile Assessment',
        description: 'Understand your risk appetite and get investment recommendations aligned with your profile.',
        icon: '⚖️',
        link: '/tools/risk-profile',
        external: false
    },
    {
        id: 'useful-links',
        title: 'Useful Links',
        description: 'Access important financial websites, regulatory bodies, and useful resources.',
        icon: '🔗',
        link: '/tools/useful-links',
        external: false
    }
];

export interface Testimonial {
    id: number;
    name: string;
    designation?: string;
    content: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Arun Alichen',
        content: 'Impressed with their financial expertise. They\'ve made a significant difference in my investments, and their strategies have maximized my returns.',
        rating: 5
    },
    {
        id: 2,
        name: 'Mr Raghuvarma',
        content: 'Incredible support and guidance – they\'ve helped me achieve financial stability and growth quickly. I\'m a highly satisfied client.',
        rating: 5
    },
    {
        id: 3,
        name: 'Priya Sharma',
        content: 'The team at Urmi Financial Services is professional and knowledgeable. They helped me plan my retirement effectively.',
        rating: 5
    },
    {
        id: 4,
        name: 'Rajesh Patel',
        content: 'Excellent service and personalized attention. They understood my financial goals and created a perfect investment strategy for me.',
        rating: 5
    }
];

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: '5 Tips for Financial Planning for Women',
        excerpt: 'Women are known to be multi-taskers. Women are better at switching between tasks and managing multiple responsibilities...',
        content: 'Women are known to be multi-taskers. Women are better at switching between tasks and managing multiple responsibilities. However, when it comes to financial planning, many women still lag behind. Here are 5 essential tips for women to take control of their financial future: 1. Start early to leverage compounding. 2. Build an emergency fund. 3. Invest in yourself through skills and education. 4. Understand your risk appetite. 5. Plan for retirement specifically as women tend to live longer.',
        date: '2024-11-15',
        category: 'Financial Planning',
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'Top 3 Benefits of SIP in Mutual Funds',
        excerpt: 'Using a structured investment plan like SIP to invest in mutual funds has become increasingly popular among investors...',
        content: 'Using a structured investment plan like SIP to invest in mutual funds has become increasingly popular among investors. SIP offers discipline, rupee cost averaging, and the power of compounding. By investing a fixed amount regularly, you buy more units when markets are low and fewer when they are high, averaging out your cost of acquisition over time.',
        date: '2024-11-10',
        category: 'Mutual Funds',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'Growth vs Value Investing: Which One to Choose?',
        excerpt: 'Investors have a wide range of options to choose from when it comes to making investment decisions...',
        content: 'Investors have a wide range of options to choose from when it comes to making investment decisions. Two popular strategies are growth investing and value investing. Growth investing focuses on companies expected to grow at an above-average rate, while value investing looks for stocks that are undervalued by the market. Understanding your timeline and risk tolerance is key to choosing the right strategy for you.',
        date: '2024-11-05',
        category: 'Investment Strategy',
        image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop'
    }
];

export interface Partner {
    id: number;
    name: string;
    logo: string;
}

export const partners: Partner[] = [
    { id: 1, name: 'HDFC Mutual Fund', logo: '/partners/hdfc.png' },
    { id: 2, name: 'ICICI Prudential', logo: '/partners/icici.png' },
    { id: 3, name: 'SBI Mutual Fund', logo: '/partners/sbi.png' },
    { id: 4, name: 'Axis Mutual Fund', logo: '/partners/axis.png' },
    { id: 5, name: 'Kotak Mahindra', logo: '/partners/kotak.png' },
    { id: 6, name: 'Aditya Birla Sun Life', logo: '/partners/birla.png' },
    { id: 7, name: 'UTI Mutual Fund', logo: '/partners/uti.png' },
    { id: 8, name: 'DSP Mutual Fund', logo: '/partners/dsp.png' }
];
