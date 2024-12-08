import { Link } from "react-router-dom";

export default function AppNavigationBar() {
    return (
        <nav className="h-16 border-b border-gray-200 flex items-center px-6 lg:fixed lg:z-50">
            <ul className="flex space-x-8">
                <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-900">About</Link>
                </li>
                <li>
                    <Link to="/experience" className="text-gray-600 hover:text-gray-900">Experience</Link>
                </li>
                <li>
                    <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
                </li>
                <li>
                    <Link to="/skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
                </li>
                <li>
                    <Link to="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
                </li>

            </ul>
        </nav>
    );
}
