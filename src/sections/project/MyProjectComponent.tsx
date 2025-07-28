import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { useFilterStore } from '../../core/store/useFilterStore';
import { useFetchPaginatedProject } from '../../core/hooks/useFetchPaginatedProject';
import ProjectItemComponent from './ProjectItemComponent';
import { useInView } from 'react-intersection-observer';
import FilterDropdown from '../../components/FilterDropdown';
import { Helmet } from 'react-helmet-async';
import { useProfileStore } from '../../core/store/useProfileStore';

export default function MyProfileComponent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const projectsGridRef = useRef<HTMLDivElement>(null);
    const { data, selectedFilter, setSelectedSkill, setSelectedType, setSelectedStatus } = useFilterStore();
    const { data: projects, fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchPaginatedProject(selectedFilter);
    const { profile } = useProfileStore()

    // Setup intersection observer for infinite scroll
    const { ref: loadMoreRef, inView } = useInView({
        threshold: 0,
        rootMargin: '100px',
    });

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const technologyButtonRef = useRef<HTMLButtonElement>(null);
    const typeButtonRef = useRef<HTMLButtonElement>(null);
    const statusButtonRef = useRef<HTMLButtonElement>(null);

    // Trigger fetch when the load more element is in view
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    useEffect(() => {
        // Initial animations
        if (containerRef.current) {
            animate(containerRef.current, {
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuad'
            });
        }

        if (titleRef.current) {
            animate(titleRef.current, {
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                delay: 200,
                easing: 'easeOutQuad'
            });

            animate('.projects-divider', {
                width: [0, 80],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeInOutQuad'
            });
        }

        animateFilterControls();
        animateProjects();
    }, []);

    useEffect(() => {
        // Re-animate projects when filters change
        animateProjects();
    }, [projects]);

    const animateFilterControls = () => {
        animate('.filter-control', {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: (_: unknown, i: number) => 400 + (i * 100),
            duration: 600,
            easing: 'easeOutQuad'
        });
    };

    const animateProjects = () => {
        animate('.project-card', {
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.95, 1],
            delay: (_: unknown, i: number) => 300 + (i * 100),
            duration: 800,
            easing: 'easeOutQuad'
        });
    };



    const handleOptionSelect = (type: 'skill' | 'type' | 'status', value: string) => {
        switch (type) {
            case 'skill':
                setSelectedSkill(value);
                break;
            case 'type':
                setSelectedType(value);
                break;
            case 'status':
                setSelectedStatus(value);
                break;
        }
        setOpenDropdown(null);
    };

    // Add this useEffect to handle clicking outside dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (openDropdown && !(event.target as Element).closest('.dropdown-container')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openDropdown]);

    return (
        <>
            <Helmet>
                <title>{profile?.name} | My Projects</title>
                <meta name="description" content={profile?.short_info} />
            </Helmet>
            <section ref={containerRef} className="py-8 min-h-screen opacity-0">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="floating-element absolute top-[10%] left-[5%] w-32 h-32 bg-indigo-600/10 dark:bg-indigo-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[40%] right-[8%] w-40 h-40 bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute bottom-[15%] left-[15%] w-24 h-24 bg-purple-600/10 dark:bg-purple-500/15 rounded-full blur-xl"></div>
                    <div className="floating-element absolute top-[60%] right-[20%] w-28 h-28 bg-emerald-600/10 dark:bg-emerald-500/15 rounded-full blur-xl"></div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 ref={titleRef} className="text-4xl font-bold text-gray-800 dark:text-gray-100">Projects</h2>
                        <div className="projects-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <div className="filter-control opacity-0">
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Technology
                            </label>
                            <FilterDropdown
                                options={data.skills}
                                selectedValue={selectedFilter.skill}
                                onSelect={(value) => handleOptionSelect('skill', value)}
                                label="Technologies"
                                triggerRef={technologyButtonRef}
                                isOpen={openDropdown === 'technology'}
                                onClose={() => setOpenDropdown(null)}
                            />
                        </div>

                        <div className="filter-control opacity-0">
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Type
                            </label>
                            <FilterDropdown
                                options={data.type}
                                selectedValue={selectedFilter.type}
                                onSelect={(value) => handleOptionSelect('type', value)}
                                label="Platforms"
                                triggerRef={typeButtonRef}
                                isOpen={openDropdown === 'type'}
                                onClose={() => setOpenDropdown(null)}
                            />
                        </div>

                        <div className="filter-control opacity-0">
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Status
                            </label>
                            <FilterDropdown
                                options={data.status}
                                selectedValue={selectedFilter.status}
                                onSelect={(value) => handleOptionSelect('status', value)}
                                label="Status"
                                triggerRef={statusButtonRef}
                                isOpen={openDropdown === 'status'}
                                onClose={() => setOpenDropdown(null)}
                            />
                        </div>
                    </div>

                    <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0">
                        {projects?.pages.flatMap(page => page.projects).map((project) => (
                            <ProjectItemComponent key={project._id} {...project} />
                        ))}
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

                    {/* No results message */}
                    {projects?.pages.flatMap(page => page.projects).length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-5xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
                            <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters to find projects</p>
                        </div>
                    )}
                </div>
            </section>

        </>
    );
}
