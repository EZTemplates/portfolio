import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { useFetchPaginatedBlogs } from '../../core/hooks/useFetchBlogs';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { IBlogItem } from '../../core/interface/blog_item_interface';
import { useNavigate } from 'react-router-dom';
import { useProfileStore } from '../../core/store/useProfileStore';

export default function BlogsSection() {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const blogsGridRef = useRef<HTMLDivElement>(null);
    const { data: blogs, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useFetchPaginatedBlogs();
    const { profile } = useProfileStore()
    // Setup intersection observer for infinite scroll
    const { ref: loadMoreRef, inView } = useInView({
        threshold: 0,
        rootMargin: '100px',
    });

    // Trigger fetch when the load more element is in view
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    useEffect(() => {
        // Initial animations
        if (titleRef.current) {
            animate(titleRef.current, {
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                delay: 200,
                easing: 'easeOutQuad'
            });

            animate('.blogs-divider', {
                width: [0, 80],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });
        }

        // Delay blog animations to ensure they're visible
        setTimeout(() => {
            animateBlogs();
        }, 500);
    }, []);

    useEffect(() => {
        // Re-animate blogs when data changes
        animateBlogs();
    }, [blogs]);

    const animateBlogs = () => {
        // Add a timeout to ensure blogs are visible even if animation fails
        setTimeout(() => {
            const blogCards = document.querySelectorAll('.blog-card');
            blogCards.forEach(card => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
            });
        }, 1000);

        animate('.blog-card', {
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.95, 1],
            delay: (_: unknown, i: number) => 300 + (i * 100),
            duration: 800,
            easing: 'easeOutQuad'
        });
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    const allBlogs = blogs?.pages?.flatMap(page => page.blogs || []) || [];

    // Show error state if there's an error
    if (error) {
        console.error('Blogs fetch error:', error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-5xl mb-4">❌</div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Failed to load blogs</h3>
                    <p className="text-gray-600 dark:text-gray-400">Please try refreshing the page</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{profile?.name} | My Skills</title>
                <meta name="description" content={profile?.short_info} />
            </Helmet>
            <section ref={containerRef} className="py-8 min-h-screen">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-element absolute top-[10%] left-[5%] w-32 h-32 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[40%] right-[8%] w-40 h-40 bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute bottom-[15%] left-[15%] w-24 h-24 bg-purple-600/10 dark:bg-purple-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[60%] right-[20%] w-28 h-28 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-full blur-xl"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 ref={titleRef} className="text-4xl font-bold text-gray-800 dark:text-gray-100">Blogs</h2>
                        <div className="blogs-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl">
                            Insights, tutorials, and thoughts on technology and development.
                        </p>
                    </div>

                    <div ref={blogsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0">
                        {allBlogs.length > 0 ? (
                            allBlogs.map((blog: IBlogItem) => (
                                <article key={blog.id} className="blog-card group relative" style={{ opacity: 1, transform: 'translateY(0) scale(1)' }}>
                                    <div className="relative rounded-xl bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                        {/* Blog Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={blog.bannerImageUrl || "https://biosites.in/favicon.ico"}
                                                alt={blog.heading}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                            {/* Status Badge */}
                                            <div className="absolute top-3 left-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${blog.status === 'published'
                                                    ? 'bg-green-500/90 text-white'
                                                    : 'bg-yellow-500/90 text-white'
                                                    }`}>
                                                    {blog.status}
                                                </span>
                                            </div>

                                            {/* Date Badge */}
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                                                    {formatDate(blog.createdAt)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Blog Content */}
                                        <div className="p-6">
                                            {/* Author Info */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-medium">
                                                        {blog.user_id.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-200">{blog.user_id.name}</p>
                                                    <p className="text-xs text-gray-400">{blog.user_id.email}</p>
                                                </div>
                                            </div>

                                            {/* Blog Title */}
                                            <h3 className="text-xl font-bold text-gray-100 mb-3 line-clamp-2 group-hover:text-indigo-300 transition-colors duration-300">
                                                {blog.heading}
                                            </h3>

                                            {/* Blog Description */}
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                                {truncateText(blog.description, 120)}
                                            </p>

                                            {/* Blog Meta */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {formatDate(blog.updatedAt)}
                                                    </span>
                                                </div>

                                                {/* Read More Button */}
                                                <button onClick={() => navigate(`/blogs/${blog.id}`)} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                                                    Read More
                                                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-8">
                                <p className="text-gray-500">No blogs available</p>
                            </div>
                        )}
                    </div>

                    {/* Loading indicator */}
                    {isFetchingNextPage && (
                        <div className="flex justify-center items-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
                        </div>
                    )}

                    {/* Load more trigger */}
                    {hasNextPage && (
                        <div ref={loadMoreRef} className="h-10" />
                    )}

                    {/* No blogs message */}
                    {allBlogs.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-5xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No blogs found</h3>
                            <p className="text-gray-600 dark:text-gray-400">Check back later for new content!</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
