import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { animate } from 'animejs';
import { useFetchBlogDetails } from '../../core/hooks/useFetchBlogDetails';

import { Helmet } from 'react-helmet-async';

interface TableOfContentsItem {
    id: string;
    text: string;
    level: number;
}

export default function BlogDetailsSection() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();


    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const tocRef = useRef<HTMLDivElement>(null);

    const { data: blog, isLoading, error } = useFetchBlogDetails(id);
    const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
    const [activeHeading, setActiveHeading] = useState<string>('');


    // Generate table of contents from blog content
    useEffect(() => {
        if (blog?.content) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(blog.content, 'text/html');
            const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

            const toc: TableOfContentsItem[] = [];
            headings.forEach((heading, index) => {
                const level = parseInt(heading.tagName.charAt(1));
                const text = heading.textContent || '';
                const id = `heading-${index}`;

                toc.push({
                    id,
                    text,
                    level
                });
            });

            setTableOfContents(toc);
            console.log('Generated TOC:', toc);

            // Add IDs to the actual rendered content
            setTimeout(() => {
                const contentElement = contentRef.current;
                if (contentElement) {
                    const renderedHeadings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
                    console.log('Found headings:', renderedHeadings.length);
                    renderedHeadings.forEach((heading, index) => {
                        heading.setAttribute('id', `heading-${index}`);
                    });
                }
            }, 100);
        }
    }, [blog]);

    // Intersection Observer for active heading
    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Active heading:', entry.target.id);
                        setActiveHeading(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-10% 0px -80% 0px',
                threshold: 0
            }
        );

        const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
        console.log('Observing headings:', headings.length);
        headings.forEach(heading => observer.observe(heading));

        return () => observer.disconnect();
    }, [blog]);

    // Animations
    useEffect(() => {
        if (containerRef.current) {
            animate(containerRef.current, {
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuad'
            });
        }

        if (contentRef.current) {
            animate('.blog-content-section', {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (_: unknown, i: number) => 200 + (i * 100),
                duration: 600,
                easing: 'easeOutQuad'
            });
        }

        if (tocRef.current) {
            animate('.toc-item', {
                opacity: [0, 1],
                translateX: [-20, 0],
                delay: (_: unknown, i: number) => 400 + (i * 50),
                duration: 500,
                easing: 'easeOutQuad'
            });
        }
    }, [blog]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const scrollToHeading = (headingId: string) => {
        const element = document.getElementById(headingId);
        if (element) {
            // Add offset for fixed header
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const renderTableOfContents = () => {
        return tableOfContents.map((item) => (
            <div
                key={item.id}
                className={`toc-item cursor-pointer transition-all duration-300 hover:text-indigo-400 hover:bg-gray-800/50 rounded px-2 py-1 ${activeHeading === item.id
                    ? 'text-indigo-400 font-medium bg-indigo-500/20 border-l-2 border-indigo-400'
                    : 'text-gray-300'
                    }`}
                style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
                onClick={() => scrollToHeading(item.id)}
            >
                <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeHeading === item.id ? 'bg-indigo-400' : 'bg-gray-500'
                        }`}></div>
                    <span className="text-sm leading-relaxed">{item.text}</span>
                </div>
            </div>
        ));
    };

    if (!id || isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (error || !blog) {

        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-5xl mb-4">❌</div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Blog not found</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {error ? `Error: ${error.message}` : 'The blog you\'re looking for doesn\'t exist.'}
                    </p>
                    <button
                        onClick={() => navigate('/blogs')}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                        Back to Blogs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{blog.title}</title>
                <meta name="description" content={blog.description} />
            </Helmet>

            <div ref={containerRef} className="min-h-screen opacity-0">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-element absolute top-[10%] left-[5%] w-32 h-32 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[40%] right-[8%] w-40 h-40 bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute bottom-[15%] left-[15%] w-24 h-24 bg-purple-600/10 dark:bg-purple-500/15 rounded-full blur-xl"></div>
                </div>

                <div className="container mx-auto px-4 py-8 relative z-10">
                    {/* Back Button */}
                    <div className="mb-6">
                        <button
                            onClick={() => navigate('/blogs')}
                            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Blogs
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Table of Contents - Show above on small screens */}
                        <div className="lg:col-span-1 order-1 lg:order-2">
                            <div ref={tocRef} className="lg:sticky lg:top-8 lg:h-fit">
                                <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 max-h-[80vh] lg:max-h-none overflow-y-auto">
                                    <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                        Table of Contents
                                    </h3>

                                    {tableOfContents.length > 0 ? (
                                        <div className="space-y-1">
                                            {renderTableOfContents()}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-500">No headings found in this blog.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3 order-2 lg:order-1">
                            <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden">
                                {/* Hero Section */}
                                <div className="relative h-64 md:h-80">
                                    <img
                                        src={blog.bannerImageUrl || "https://biosites.in/favicon.ico"}
                                        alt={blog.heading}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${blog.status === 'published'
                                            ? 'bg-green-500/90 text-white'
                                            : 'bg-yellow-500/90 text-white'
                                            }`}>
                                            {blog.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Blog Header */}
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-medium">
                                                {blog.user_id.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-gray-200">{blog.user_id.name}</p>
                                            <p className="text-sm text-gray-400">{blog.user_id.email}</p>
                                        </div>
                                        <div className="ml-auto text-right">
                                            <p className="text-sm text-gray-400">Published</p>
                                            <p className="text-sm text-gray-300">{formatDate(blog.createdAt)}</p>
                                        </div>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                                        {blog.heading}
                                    </h1>

                                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                        {blog.description}
                                    </p>
                                </div>

                                {/* Blog Content */}
                                <div ref={contentRef} className="px-6 md:px-8 pb-8">
                                    <div
                                        className="blog-content-section prose prose-lg prose-invert max-w-none text-gray-200 leading-relaxed space-y-6"
                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                        style={{
                                            '--tw-prose-body': '#e5e7eb',
                                            '--tw-prose-headings': '#ffffff',
                                            '--tw-prose-links': '#a78bfa',
                                            '--tw-prose-bold': '#ffffff',
                                            '--tw-prose-counters': '#9ca3af',
                                            '--tw-prose-bullets': '#9ca3af',
                                            '--tw-prose-hr': '#4b5563',
                                            '--tw-prose-quotes': '#ffffff',
                                            '--tw-prose-quote-borders': '#4b5563',
                                            '--tw-prose-captions': '#d1d5db',
                                            '--tw-prose-code': '#ffffff',
                                            '--tw-prose-pre-code': '#f3f4f6',
                                            '--tw-prose-pre-bg': '#1f2937',
                                            '--tw-prose-th-borders': '#6b7280',
                                            '--tw-prose-td-borders': '#4b5563'
                                        } as React.CSSProperties}
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
