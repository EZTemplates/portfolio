import { useState } from 'react';
import dayjs from "dayjs";
import { IProject } from "../../core/interface/project_interface";

const getColorByStatus = (status: string) => {
    return status === 'In Progress'
        ? 'from-blue-500 to-blue-600'
        : 'from-emerald-500 to-emerald-600';
};

export default function ProjectItemComponent(project: IProject) {
    const [showTeamModal, setShowTeamModal] = useState(false);

    return (
        <>
            <div
                key={project._id}
                className="project-card opacity-0 group relative rounded-xl overflow-hidden
                         bg-gray-900/90 backdrop-blur-xl border border-gray-700/50
                         hover:border-gray-600/50 transition-all duration-100"
            >
                {/* Animated Left Border Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 
                               bg-gradient-to-b ${getColorByStatus(project.status)}
                               before:absolute before:inset-0
                               before:bg-gradient-to-b before:from-white/20 before:to-transparent
                               before:animate-shimmer`}></div>

                <div className="p-6 pl-7">
                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            {project.logo && (
                                <img
                                    src={project.logo}
                                    alt={project.name}
                                    className="w-10 h-10 rounded-lg object-cover"
                                />
                            )}
                            <div>
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium
                                                   bg-gradient-to-r ${getColorByStatus(project.status)}
                                                   text-white`}>
                                        {project.status}
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                        {project.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {dayjs(project.startAt).format("MMM YYYY")}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                        {project.short_description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-0.5 rounded-full text-xs 
                                         bg-gradient-to-r from-indigo-500 to-indigo-600
                                         text-white font-medium
                                         hover:shadow-lg hover:shadow-indigo-500/20
                                         hover:-translate-y-0.5
                                         transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Team Summary */}
                    {(project.maintainers?.length > 0 || project.contributors?.length > 0) && (
                        <button
                            onClick={() => setShowTeamModal(true)}
                            className="mb-4 w-full p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800
                                     transition-colors text-left"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="text-gray-300 text-sm">
                                            {project.maintainers?.length || 0} Maintainers
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span className="text-gray-300 text-sm">
                                            {project.contributors?.length || 0} Contributors
                                        </span>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    )}

                    {/* Links Section */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700/50">
                        {project.website_link && (
                            <a
                                href={project.website_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300
                                         transition-colors text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                        {project.source_code && (
                            <a
                                href={project.source_code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-gray-300
                                         transition-colors text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Source Code
                            </a>
                        )}
                        {project.play_store_link && (
                            <a
                                href={project.play_store_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-gray-300
                                         transition-colors text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.2.2-.3.4-.3.7v-21.6c0-.3.1-.5.3-.7zM14.4 12l10.2 10.2c.2.2.3.4.3.7v-21.6c0-.3-.1-.5-.3-.7L14.4 12z" />
                                </svg>
                                Play Store
                            </a>
                        )}
                        {project.app_store_link && (
                            <a
                                href={project.app_store_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-gray-300
                                         transition-colors text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                App Store
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Team Modal */}
            {showTeamModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-gray-900 rounded-xl p-6 max-w-lg w-full mx-4 relative">
                        <button
                            onClick={() => setShowTeamModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-xl font-bold text-white mb-6">Team Members</h3>

                        {project.maintainers?.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-300 mb-3">Maintainers</h4>
                                <div className="space-y-2">
                                    {project.maintainers.map((maintainer) => (
                                        <a
                                            key={maintainer._id}
                                            href={maintainer.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/50 
                                                     hover:bg-gray-800 transition-colors"
                                        >
                                            <div className="flex-1">
                                                <div className="text-white font-medium">{maintainer.name}</div>
                                                <div className="text-sm text-gray-400">{maintainer.email}</div>
                                            </div>
                                            <div className="flex gap-2">
                                                {maintainer.github && (
                                                    <a href={maintainer.github} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {maintainer.linkedIn && (
                                                    <a href={maintainer.linkedIn} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {maintainer.twitter && (
                                                    <a href={maintainer.twitter} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {maintainer.instagram && (
                                                    <a href={maintainer.instagram} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {maintainer.website && (
                                                    <a href={maintainer.website} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.31 4.917c3.97 0 7.2 3.23 7.2 7.2 0 3.97-3.23 7.2-7.2 7.2-3.97 0-7.2-3.23-7.2-7.2 0-3.97 3.23-7.2 7.2-7.2zm0 2.4c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 2.4c1.33 0 2.4 1.07 2.4 2.4s-1.07 2.4-2.4 2.4-2.4-1.07-2.4-2.4 1.07-2.4 2.4-2.4z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.contributors?.length > 0 && (
                            <div>
                                <h4 className="text-sm font-medium text-gray-300 mb-3">Contributors</h4>
                                <div className="space-y-2">
                                    {project.contributors.map((contributor) => (
                                        <a
                                            key={contributor._id}
                                            href={contributor.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/50 
                                                     hover:bg-gray-800 transition-colors"
                                        >
                                            <div className="flex-1">
                                                <div className="text-white font-medium">{contributor.name}</div>
                                                <div className="text-sm text-gray-400">{contributor.email}</div>
                                            </div>
                                            <div className="flex gap-2">
                                                {contributor.github && (
                                                    <a href={contributor.github} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {contributor.linkedIn && (
                                                    <a href={contributor.linkedIn} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {contributor.twitter && (
                                                    <a href={contributor.twitter} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {contributor.instagram && (
                                                    <a href={contributor.instagram} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {contributor.website && (
                                                    <a href={contributor.website} target="_blank" rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-gray-300">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.31 4.917c3.97 0 7.2 3.23 7.2 7.2 0 3.97-3.23 7.2-7.2 7.2-3.97 0-7.2-3.23-7.2-7.2 0-3.97 3.23-7.2 7.2-7.2zm0 2.4c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 2.4c1.33 0 2.4 1.07 2.4 2.4s-1.07 2.4-2.4 2.4-2.4-1.07-2.4-2.4 1.07-2.4 2.4-2.4z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
