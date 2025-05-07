export default function MyProfileComponentShimmer() {
    return (
        <div className="w-full bg-transparent">
            <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col items-center text-center p-3 sm:p-4 md:p-5">
                    {/* Avatar Shimmer */}
                    <div className="relative mb-3 sm:mb-3">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    </div>

                    {/* Name and Title Shimmer */}
                    <div className="space-y-2 mb-3">
                        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>

                    {/* Location Shimmer */}
                    <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3"></div>

                    {/* Social Icons Shimmer */}
                    <div className="flex gap-3 mb-3">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                        ))}
                    </div>

                    {/* Bio Shimmer */}
                    <div className="bg-white/70 dark:bg-gray-800/50 rounded-lg p-3 mb-3 backdrop-blur-sm w-full">
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>
                    </div>

                    {/* Contact Info Shimmer */}
                    <div className="w-full space-y-2 mb-3">
                        <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>

                    {/* Resume Button Shimmer */}
                    <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
} 