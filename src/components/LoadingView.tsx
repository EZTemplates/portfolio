function LoadingView() {
    return (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-24 h-24 border-4 border-indigo-500/20 rounded-full animate-spin border-t-indigo-500"></div>
                {/* Inner ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-blue-500/20 rounded-full animate-spin border-t-blue-500" style={{ animationDirection: 'reverse' }}></div>
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}

export default LoadingView;