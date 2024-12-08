import { useState, useEffect } from 'react';
import axios from 'axios';

const VisitCounter = () => {
    const [visits, setVisits] = useState<number>(0);

    useEffect(() => {
        fetchVisits();
    }, []);


    const fetchVisits = async () => {
        const response = await axios.get('https://api.igaurav.dev/api/v1/visits');
        setVisits(response.data);
        localStorage.setItem('websiteVisits', response.data.toString());
    }

    return (
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Website Visits</h3>
            <div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse"
                style={{ animationDuration: '3s' }}
            >
                {visits}
            </div>
            <div className="mt-2 text-sm text-gray-500">
                Thanks for stopping by! 👋
            </div>
        </div>
    );
};

export default VisitCounter; 