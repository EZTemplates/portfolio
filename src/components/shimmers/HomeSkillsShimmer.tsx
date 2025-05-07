export default function HomeSkillsShimmer() {
    return (
        <div className="min-h-screen p-6">
            <div className="mx-auto">
                {/* Title and divider shimmer */}
                <div className="mb-8">
                    <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-3"></div>
                    <div className="h-1 w-20 bg-gray-700 rounded animate-pulse"></div>
                    <div className="mt-4 h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Profile Overview Card Shimmer */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse"></div>
                            <div className="ml-4">
                                <div className="h-6 w-32 bg-gray-700 rounded animate-pulse mb-2"></div>
                                <div className="h-4 w-40 bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="h-5 w-24 bg-gray-700 rounded animate-pulse mb-2"></div>
                                <div className="h-4 w-full bg-gray-700 rounded animate-pulse mb-1"></div>
                                <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
                            </div>
                            <div>
                                <div className="h-5 w-32 bg-gray-700 rounded animate-pulse mb-2"></div>
                                <div className="h-4 w-full bg-gray-700 rounded animate-pulse mb-1"></div>
                                <div className="h-4 w-5/6 bg-gray-700 rounded animate-pulse"></div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-6 w-20 bg-gray-700 rounded-full animate-pulse"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section Shimmer */}
                    <div>
                        <div className="h-6 w-24 bg-gray-700 rounded animate-pulse mb-4"></div>
                        <div className="flex flex-wrap gap-3 justify-center mb-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 bg-gray-700 rounded-full animate-pulse"></div>
                                    <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div
                                    key={i}
                                    className="h-10 w-24 bg-gray-700 rounded-full animate-pulse"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 