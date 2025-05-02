import { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface Project {
    title: string;
    type: string; // personal, company, client
    description: string;
    maintainer?: string;
    contributors?: {
        name: string;
        image: string;
    }[];
    startDate?: string;
    link: string | null;
    github: string | null;
    skills: string[];
    status: 'Ongoing' | 'Completed';
}

export default function MyProfileComponent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const projectsGridRef = useRef<HTMLDivElement>(null);

    const [filters, setFilters] = useState({
        technology: '',
        platform: '',
        status: ''
    });

    // Example projects data with added maintainer, contributors with images, and startDate fields
    const projects: Project[] = [
        {
            title: 'GetYourSquad-Web',
            type: 'Personal',
            description: 'GetYourSquad is a platform for PUBG players to find teammates. Users create accounts, post game details, search for profiles, and send messages to connect.',
            maintainer: 'Sachin Kumar',
            contributors: [
                { name: 'Sachin Kumar', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sachin' },
                { name: 'Rohit Sharma', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit' }
            ],
            startDate: '2021-06-15',
            link: 'https://getyoursquad.in',
            github: null,
            skills: ['React.js', 'Node.js', 'RabbitMQ', 'Socket.IO', 'MongoDB'],
            status: "Completed"
        },
        {
            title: 'GetYourSquad-App',
            type: 'Personal',
            description: 'Mobile application version of GetYourSquad for PUBG players to find teammates on the go. Includes all web features optimized for mobile experience.',
            maintainer: 'Sachin Kumar',
            contributors: [
                { name: 'Sachin Kumar', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sachin' }
            ],
            startDate: '2021-08-10',
            github: null,
            link: null,
            skills: ['Node.js', 'Express.js', 'MongoDB', 'Flutter(app)'],
            status: "Completed"
        },
        {
            title: 'Magadh Marketing',
            type: 'Company',
            description: "Magadh Marketing Android Application displays nearby shops within a 500-meter radius, with real-time data retrieval and offline usage capability. Used by 100+ marketing officers from Magadh Industries.",
            maintainer: 'MAGADH DIGITAL SOLUTIONS PVT. LTD.',
            contributors: [
                { name: 'Sachin Kumar', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sachin' },
                { name: 'Dev Team 1', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DevTeam1' },
                { name: 'Dev Team 2', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DevTeam2' },
                { name: 'Dev Team 3', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DevTeam3' }
            ],
            startDate: '2022-01-20',
            github: null,
            link: "https://play.google.com/store/apps/details?id=com.magadh.mdspl_marketing&pcampaignid=web_share",
            skills: ['Flutter', 'Dart', 'Hive', 'Google Maps API', 'Firebase', "Node.js", "Express.js", "MongoDB"],
            status: "Ongoing"
        },
        {
            title: "Notes River",
            type: "Personal",
            description: "Notes River enables users to share PDF books and notes through personalized readlists. Powered by a Node.js backend with a Flutter frontend for a seamless experience.",
            maintainer: "Sachin Kumar",
            contributors: [
                { name: 'Sachin Kumar', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sachin' },
                { name: 'Open Source 1', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OpenSource1' },
                { name: 'Open Source 2', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OpenSource2' }
            ],
            startDate: "2022-03-05",
            github: "https://github.com/Notes-River",
            link: "https://github.com/Notes-River",
            skills: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB'],
            status: "Ongoing"
        },
        {
            title: 'pcController',
            description: "pcController allows users to remotely control their PCs using mobile devices. Features account creation, machine linking, and remote PC monitoring.",
            maintainer: "Sachin Kumar",
            contributors: [
                { name: 'Sachin Kumar', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sachin' },
                { name: 'Community 1', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Community1' },
                { name: 'Community 2', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Community2' },
                { name: 'Community 3', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Community3' },
                { name: 'Community 4', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Community4' }
            ],
            startDate: "2021-11-12",
            github: "https://github.com/frenzycoders/lpcpanel.git",
            link: "https://play.google.com/store/apps/details?id=com.booringcodes.pccontroller&pcampaignid=web_share",
            skills: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB'],
            type: 'Personal',
            status: "Completed"
        }
    ]

    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

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
    }, [filteredProjects]);

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

    const handleFilterChange = (filterType: string, value: string) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);

        // Apply filters
        const filtered = projects.filter(project => {
            const techMatch = !newFilters.technology || project.skills.includes(newFilters.technology);
            const platformMatch = !newFilters.platform || project.type === newFilters.platform;
            const statusMatch = !newFilters.status || project.status === newFilters.status;
            return techMatch && platformMatch && statusMatch;
        });

        setFilteredProjects(filtered);
    };

    // Format date to a more readable format
    const formatDate = (dateString?: string) => {
        if (!dateString) return 'Unknown';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(date);
    };

    return (
        <section ref={containerRef} className="py-8 min-h-screen opacity-0">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 ref={titleRef} className="text-4xl font-bold text-gray-800 dark:text-gray-100">Projects</h2>
                    <div className="projects-divider h-1 w-0 bg-indigo-600 mt-3 opacity-0"></div>
                </div>

                <div className="flex flex-wrap gap-4 mb-10">
                    <div className="filter-control opacity-0">
                        <label htmlFor="technology-filter" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Technology
                        </label>
                        <select
                            id="technology-filter"
                            className="w-full md:w-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => handleFilterChange('technology', e.target.value)}
                            value={filters.technology}
                            aria-label="Filter by technology"
                        >
                            <option value="">All Technologies</option>
                            <option value="React.js">React.js</option>
                            <option value="Node.js">Node.js</option>
                            <option value="Flutter">Flutter</option>
                            <option value="MongoDB">MongoDB</option>
                            <option value="Socket.IO">Socket.IO</option>
                        </select>
                    </div>

                    <div className="filter-control opacity-0">
                        <label htmlFor="platform-filter" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Platform
                        </label>
                        <select
                            id="platform-filter"
                            className="w-full md:w-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => handleFilterChange('platform', e.target.value)}
                            value={filters.platform}
                            aria-label="Filter by platform"
                        >
                            <option value="">All Platforms</option>
                            <option value="Personal">Personal</option>
                            <option value="Company">Company</option>
                            <option value="Client">Client</option>
                        </select>
                    </div>

                    <div className="filter-control opacity-0">
                        <label htmlFor="status-filter" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Status
                        </label>
                        <select
                            id="status-filter"
                            className="w-full md:w-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => handleFilterChange('status', e.target.value)}
                            value={filters.status}
                            aria-label="Filter by status"
                        >
                            <option value="">All Status</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="project-card opacity-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Ongoing'
                                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                                        : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                    </svg>
                                    Started: {formatDate(project.startDate)}
                                    <span className="mx-2">•</span>
                                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
                                        {project.type}
                                    </span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">{project.description}</p>

                                {project.maintainer && (
                                    <div className="mb-3 flex items-center text-sm">
                                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">Maintainer:</span>
                                        <span className="text-gray-600 dark:text-gray-400">{project.maintainer}</span>
                                    </div>
                                )}

                                {project.contributors && project.contributors.length > 0 && (
                                    <div className="mb-4">
                                        <div className="flex items-center mb-2">
                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium mr-2">Contributors:</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{project.contributors.length}</span>
                                        </div>
                                        <div className="flex -space-x-2 overflow-hidden">
                                            {project.contributors.slice(0, 5).map((contributor, idx) => (
                                                <div
                                                    key={idx}
                                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                                                    title={contributor.name}
                                                >
                                                    <img
                                                        src={contributor.image}
                                                        alt={contributor.name}
                                                        className="h-full w-full rounded-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            {project.contributors.length > 5 && (
                                                <div
                                                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-800 dark:text-gray-200 ring-2 ring-white dark:ring-gray-800"
                                                    title="More contributors"
                                                >
                                                    +{project.contributors.length - 5}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.slice(0, 3).map(skill => (
                                        <span
                                            key={skill}
                                            className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {project.skills.length > 3 && (
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs">
                                            +{project.skills.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex gap-4 mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors text-sm font-medium"
                                            aria-label={`View live demo of ${project.title}`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Live Project
                                            </span>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors text-sm font-medium"
                                            aria-label={`View GitHub repository for ${project.title}`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Code
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-5xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
                        <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters to find projects</p>
                    </div>
                )}
            </div>
        </section>
    );
}
