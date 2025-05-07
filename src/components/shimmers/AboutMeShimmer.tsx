export default function AboutMeShimmer() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="mx-auto py-12 px-4 relative z-10">
                {/* Title Shimmer */}
                <div className="mb-8">
                    <div className="h-8 w-48 bg-gray-700 rounded-lg animate-pulse mb-3" />
                    <div className="h-1 w-20 bg-gray-700 rounded animate-pulse mb-4" />
                    <div className="h-4 w-96 bg-gray-700 rounded animate-pulse" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column Shimmer */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-800/70 rounded-2xl p-6 md:p-8 shadow-xl">
                            <div className="h-8 w-32 bg-gray-700 rounded-lg animate-pulse mb-6" />

                            {/* Timeline Shimmer */}
                            <div className="space-y-6">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="h-4 w-4 bg-gray-700 rounded-full animate-pulse" />
                                        <div className="h-20 w-full bg-gray-700 rounded-lg animate-pulse" />
                                    </div>
                                ))}
                            </div>

                            {/* Projects Highlight Shimmer */}
                            <div className="mt-10">
                                <div className="h-6 w-40 bg-gray-700 rounded-lg animate-pulse mb-4" />
                                <div className="h-16 w-full bg-gray-700 rounded-lg animate-pulse" />
                            </div>

                            {/* Buttons Shimmer */}
                            <div className="flex flex-wrap gap-3 mt-8">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-10 w-32 bg-gray-700 rounded-lg animate-pulse" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column Shimmer */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Tech Stack Shimmer */}
                        <div className="bg-gray-800/70 rounded-2xl p-6 shadow-xl">
                            <div className="h-6 w-32 bg-gray-700 rounded-lg animate-pulse mb-4" />
                            <div className="flex flex-wrap gap-2">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="h-8 w-24 bg-gray-700 rounded-full animate-pulse" />
                                ))}
                            </div>
                        </div>

                        {/* Core Strengths Shimmer */}
                        <div className="bg-gray-800/70 rounded-2xl p-6 shadow-xl">
                            <div className="h-6 w-32 bg-gray-700 rounded-lg animate-pulse mb-4" />
                            <div className="space-y-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="h-4 w-32 bg-gray-700 rounded animate-pulse" />
                                        <div className="h-2 w-full bg-gray-700 rounded-full animate-pulse" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Open to Work Shimmer */}
                        <div className="bg-gray-800/70 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-gray-700 rounded-lg animate-pulse" />
                                <div className="space-y-2">
                                    <div className="h-4 w-24 bg-gray-700 rounded animate-pulse" />
                                    <div className="h-3 w-32 bg-gray-700 rounded animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 