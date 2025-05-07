export default function ExperienceShimmer() {
    return (
        <div className="min-h-screen bg-transparent">
            <div className="mx-auto px-4 py-12 max-w-4xl">
                {/* Header Shimmer */}
                <div className="mb-12">
                    <div className="h-10 w-64 bg-gray-700 rounded-lg animate-pulse mb-4" />
                    <div className="h-1 w-20 bg-gray-700 rounded-full mb-6" />
                    <div className="h-4 w-96 bg-gray-700 rounded animate-pulse" />
                </div>

                {/* Experience Cards Shimmer */}
                <div className="space-y-8">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4">
                                <div className="h-6 w-32 bg-gray-700 rounded-full animate-pulse" />
                                <div className="h-6 w-36 bg-gray-700 rounded animate-pulse" />
                            </div>
                            <div className="h-8 w-48 bg-gray-700 rounded animate-pulse mb-3" />
                            <div className="space-y-2 mb-6">
                                <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                                <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse" />
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-6 w-20 bg-gray-700 rounded-full animate-pulse" />
                                ))}
                            </div>
                            <div className="space-y-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="h-4 w-4 bg-gray-700 rounded-full animate-pulse" />
                                        <div className="h-4 w-full bg-gray-700 rounded animate-pulse" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 