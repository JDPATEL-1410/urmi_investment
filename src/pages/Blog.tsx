import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import blogHeader from '../assets/blog-header.png';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    source: string;
    url: string;
}

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    // Smart category detection
    const categorizePost = (title: string, description: string) => {
        const text = `${title} ${description}`.toLowerCase();

        if (text.includes('invest') || text.includes('stock') || text.includes('mutual fund') || text.includes('sip')) {
            return 'Investing';
        }
        if (text.includes('tax') || text.includes('deduction') || text.includes('80c')) {
            return 'Tax Planning';
        }
        if (text.includes('wealth') || text.includes('portfolio')) {
            return 'Wealth Management';
        }
        if (text.includes('insurance') || text.includes('policy')) {
            return 'Insurance';
        }
        return 'Personal Finance';
    };

    // Get category-specific fallback thumbnail
    const getCategoryThumbnail = (category: string) => {
        const thumbnails: { [key: string]: string } = {
            'Investing': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&q=80',
            'Tax Planning': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80',
            'Wealth Management': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop&q=80',
            'Insurance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
            'Personal Finance': 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=500&fit=crop&q=80'
        };
        return thumbnails[category] || thumbnails['Personal Finance'];
    };

    // Strip HTML tags from description
    const stripHtml = (html: string) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    // Fallback static posts
    const staticPosts: BlogPost[] = [
        {
            id: '1',
            title: "Smart Investment Strategies for 2025",
            excerpt: "Discover proven investment strategies to grow your wealth in the current market conditions.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&q=80",
            category: "Investing",
            date: "2025-12-08",
            source: "Financial Insights",
            url: "#"
        },
        {
            id: '2',
            title: "Maximize Your Tax Savings This Year",
            excerpt: "Learn the best tax-saving strategies and investment options under Section 80C.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80",
            category: "Tax Planning",
            date: "2025-12-07",
            source: "Tax Advisor",
            url: "#"
        },
        {
            id: '3',
            title: "Building Long-Term Wealth with SIPs",
            excerpt: "How systematic investment plans can help you achieve your financial goals.",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop&q=80",
            category: "Wealth Management",
            date: "2025-12-06",
            source: "Wealth Expert",
            url: "#"
        }
    ];

    useEffect(() => {
        const loadBlogs = async () => {
            // Try to get cached blogs from localStorage
            const cachedData = localStorage.getItem('financialBlogs');
            const cacheTime = localStorage.getItem('financialBlogsTime');

            if (cachedData && cacheTime) {
                const hoursSinceCache = (Date.now() - parseInt(cacheTime)) / (1000 * 60 * 60);
                if (hoursSinceCache < 24) {
                    setBlogs(JSON.parse(cachedData));
                    setLoading(false);
                }
            }

            // Fetch fresh blogs from RSS feed
            try {
                const response = await fetch(
                    'https://api.rss2json.com/v1/api.json?rss_url=https://economictimes.indiatimes.com/wealth/rssfeeds/837555174.cms'
                );
                const data = await response.json();

                if (data.status === 'ok' && data.items && data.items.length > 0) {
                    const processedBlogs: BlogPost[] = data.items.slice(0, 12).map((item: any, index: number) => {
                        const category = categorizePost(item.title, item.description || '');
                        const thumbnail = item.thumbnail || item.enclosure?.link || getCategoryThumbnail(category);

                        return {
                            id: item.guid || `blog-${index}`,
                            title: item.title,
                            excerpt: stripHtml(item.description || '').substring(0, 150) + '...',
                            image: thumbnail,
                            category: category,
                            date: item.pubDate,
                            source: 'Economic Times',
                            url: item.link
                        };
                    });

                    setBlogs(processedBlogs);

                    // Cache the results
                    localStorage.setItem('financialBlogs', JSON.stringify(processedBlogs));
                    localStorage.setItem('financialBlogsTime', Date.now().toString());
                } else {
                    setBlogs(staticPosts);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                setBlogs(staticPosts);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();

        // Auto-refresh every 24 hours
        const interval = setInterval(loadBlogs, 24 * 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Financial Insights & Tips"
                subtitle="Stay informed with our latest articles on financial planning, investments, and wealth management"
                image={blogHeader}
                badge="Expert Advice"
            />

            {/* Blog Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            <p className="mt-4 text-neutral-600">Loading latest financial insights...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card card-hover"
                                >
                                    {/* Real Thumbnail Image */}
                                    <div className="w-full h-56 rounded-xl mb-4 overflow-hidden bg-neutral-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                // Fallback to category-specific gradient if image fails
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.classList.add('bg-gradient-to-br', 'from-primary', 'to-accent-green', 'flex', 'items-center', 'justify-center');
                                                    parent.innerHTML = '<div class="text-6xl">📰</div>';
                                                }
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-4 mb-3">
                                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="text-sm text-neutral-500">
                                            {new Date(post.date).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-neutral-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-neutral-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-neutral-500">
                                            Source: {post.source}
                                        </span>
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
                                        >
                                            Read More
                                            <svg
                                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;
