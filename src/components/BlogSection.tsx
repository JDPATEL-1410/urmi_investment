import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

const BlogSection = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
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

    // Strip HTML tags
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
            // Try to get cached blogs first
            const cachedData = localStorage.getItem('financialBlogs');
            const cacheTime = localStorage.getItem('financialBlogsTime');

            if (cachedData && cacheTime) {
                const hoursSinceCache = (Date.now() - parseInt(cacheTime)) / (1000 * 60 * 60);
                if (hoursSinceCache < 24) {
                    const cached = JSON.parse(cachedData);
                    setBlogPosts(cached.slice(0, 3));
                    setLoading(false);
                    return;
                }
            }

            // Fetch fresh blogs
            try {
                const response = await fetch(
                    'https://api.rss2json.com/v1/api.json?rss_url=https://economictimes.indiatimes.com/wealth/rssfeeds/837555174.cms'
                );
                const data = await response.json();

                if (data.status === 'ok' && data.items && data.items.length > 0) {
                    const processedBlogs: BlogPost[] = data.items.slice(0, 3).map((item: any, index: number) => {
                        const category = categorizePost(item.title, item.description || '');
                        const thumbnail = item.thumbnail || item.enclosure?.link || getCategoryThumbnail(category);

                        return {
                            id: item.guid || `blog-${index}`,
                            title: item.title,
                            excerpt: stripHtml(item.description || '').substring(0, 120) + '...',
                            image: thumbnail,
                            category: category,
                            date: item.pubDate,
                            source: 'Economic Times',
                            url: item.link
                        };
                    });

                    setBlogPosts(processedBlogs);

                    // Cache full list
                    const allBlogs = data.items.slice(0, 12).map((item: any, index: number) => {
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
                    localStorage.setItem('financialBlogs', JSON.stringify(allBlogs));
                    localStorage.setItem('financialBlogsTime', Date.now().toString());
                } else {
                    setBlogPosts(staticPosts);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                setBlogPosts(staticPosts);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    if (loading) {
        return (
            <section className="py-16 md:py-24 bg-white">
                <div className="section-container">
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <p className="mt-4 text-neutral-600">Loading latest insights...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="section-container">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                            Our Recent Blogs
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Stay updated with the latest financial insights and tips
                        </p>
                    </motion.div>
                    <Link to="/blog" className="hidden md:inline-block btn-primary">
                        View All Posts
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card card-hover"
                        >
                            <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-neutral-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.classList.add('bg-gradient-to-br', 'from-primary/10', 'to-accent-green/10', 'flex', 'items-center', 'justify-center');
                                            parent.innerHTML = '<span class="text-6xl">📰</span>';
                                        }
                                    }}
                                />
                            </div>

                            <div className="text-sm text-primary font-medium mb-2">
                                {post.category}
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="text-neutral-600 mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-500">
                                    {new Date(post.date).toLocaleDateString('en-IN', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center group"
                                >
                                    Read More
                                    <svg
                                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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

                <div className="text-center mt-8 md:hidden">
                    <Link to="/blog" className="btn-primary">
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
};

// ✅ THIS IS THE KEY LINE - Make sure it's at the bottom
export default BlogSection;
