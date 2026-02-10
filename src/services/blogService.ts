// Blog API Integration Service
// Fetches financial blogs from NewsAPI

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    image: string;
    source: string;
    url: string;
}

const NEWS_API_KEY = 'demo'; // Replace with actual API key
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

// Fallback blogs in case API fails
const fallbackBlogs: BlogPost[] = [
    {
        id: '1',
        title: 'Understanding SIP: A Beginner\'s Guide to Systematic Investment Plans',
        excerpt: 'Learn how Systematic Investment Plans (SIP) can help you build wealth through disciplined investing and rupee cost averaging.',
        content: 'SIP is one of the most popular investment methods...',
        date: '2024-12-01',
        category: 'Investment',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop',
        source: 'Economic Times',
        url: '#'
    },
    {
        id: '2',
        title: 'Tax Saving Strategies for FY 2024-25',
        excerpt: 'Discover effective tax-saving strategies and investment options under Section 80C, 80D, and other provisions.',
        content: 'Tax planning is essential for maximizing your savings...',
        date: '2024-11-28',
        category: 'Tax Planning',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
        source: 'Moneycontrol',
        url: '#'
    },
    {
        id: '3',
        title: 'Mutual Funds vs Fixed Deposits: Which is Better?',
        excerpt: 'Compare the returns, risks, and benefits of mutual funds and fixed deposits to make an informed investment decision.',
        content: 'When it comes to investing your hard-earned money...',
        date: '2024-11-25',
        category: 'Investment',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
        source: 'LiveMint',
        url: '#'
    },
    {
        id: '4',
        title: 'Retirement Planning: How Much Do You Really Need?',
        excerpt: 'Calculate your retirement corpus and learn strategies to build a comfortable retirement fund.',
        content: 'Planning for retirement is crucial for financial security...',
        date: '2024-11-20',
        category: 'Retirement',
        image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop',
        source: 'Economic Times',
        url: '#'
    },
    {
        id: '5',
        title: 'Insurance 101: Types and Importance',
        excerpt: 'Understand different types of insurance policies and why they are essential for financial protection.',
        content: 'Insurance is a crucial component of financial planning...',
        date: '2024-11-15',
        category: 'Insurance',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
        source: 'Moneycontrol',
        url: '#'
    },
    {
        id: '6',
        title: 'Stock Market Basics: A Complete Guide for Beginners',
        excerpt: 'Learn the fundamentals of stock market investing, from opening a Demat account to picking your first stocks.',
        content: 'The stock market can seem intimidating for beginners...',
        date: '2024-11-10',
        category: 'Stock Market',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop',
        source: 'LiveMint',
        url: '#'
    }
];

export const fetchFinancialBlogs = async (): Promise<BlogPost[]> => {
    try {
        // Try to fetch from NewsAPI
        const response = await fetch(
            `${NEWS_API_URL}?q=finance OR investment OR mutual funds OR stock market&language=en&sortBy=publishedAt&pageSize=12&apiKey=${NEWS_API_KEY}`
        );

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            return data.articles.map((article: any, index: number) => ({
                id: `api-${index}`,
                title: article.title,
                excerpt: article.description || article.content?.substring(0, 150) + '...',
                content: article.content || article.description,
                date: article.publishedAt,
                category: getCategoryFromTitle(article.title),
                image: article.urlToImage || `https://images.unsplash.com/photo-${1579621970563 + index}?w=800&auto=format&fit=crop`,
                source: article.source.name,
                url: article.url
            }));
        }

        return fallbackBlogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        // Return fallback blogs if API fails
        return fallbackBlogs;
    }
};

// Helper function to categorize blogs
function getCategoryFromTitle(title: string): string {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes('tax')) return 'Tax Planning';
    if (lowerTitle.includes('retirement') || lowerTitle.includes('pension')) return 'Retirement';
    if (lowerTitle.includes('insurance')) return 'Insurance';
    if (lowerTitle.includes('stock') || lowerTitle.includes('equity')) return 'Stock Market';
    if (lowerTitle.includes('mutual fund') || lowerTitle.includes('sip')) return 'Investment';
    if (lowerTitle.includes('loan') || lowerTitle.includes('credit')) return 'Loans';

    return 'Finance';
}

// Cache blogs in localStorage
export const getCachedBlogs = (): BlogPost[] | null => {
    try {
        const cached = localStorage.getItem('financial_blogs');
        const timestamp = localStorage.getItem('blogs_timestamp');

        if (cached && timestamp) {
            const cacheAge = Date.now() - parseInt(timestamp);
            // Cache for 24 hours
            if (cacheAge < 24 * 60 * 60 * 1000) {
                return JSON.parse(cached);
            }
        }
    } catch (error) {
        console.error('Error reading cache:', error);
    }
    return null;
};

export const setCachedBlogs = (blogs: BlogPost[]) => {
    try {
        localStorage.setItem('financial_blogs', JSON.stringify(blogs));
        localStorage.setItem('blogs_timestamp', Date.now().toString());
    } catch (error) {
        console.error('Error setting cache:', error);
    }
};
