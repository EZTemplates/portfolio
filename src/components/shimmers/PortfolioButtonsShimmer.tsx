export default function PortfolioButtonsShimmer() {
    return (
        <div className="flex flex-wrap justify-start gap-3 bg-gray-800/60 p-4 rounded-2xl shadow-xl w-full backdrop-blur-md">
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className="h-10 w-32 bg-gray-700 rounded-xl animate-pulse"
                />
            ))}
        </div>
    );
} 