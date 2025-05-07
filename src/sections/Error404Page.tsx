import { useNavigate } from 'react-router-dom';

interface Error404PageProps {
    onReset: () => void;
}

export default function Error404Page({ onReset }: Error404PageProps) {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        onReset();
        navigate('/');
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-4">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                    404
                </h1>
                <h2 className="text-3xl font-semibold">Page Not Found</h2>
                <p className="text-gray-400 max-w-md">
                    Oops! The page you're looking for seems to have vanished into thin air.
                </p>
                <button
                    onClick={handleReturnHome}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    Return Home
                </button>
            </div>
        </div>
    );
}
