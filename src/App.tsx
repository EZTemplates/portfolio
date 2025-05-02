import { Outlet, useLocation, Navigate } from 'react-router-dom'
import ProfilePage from "./sections/MyProfileComponent"
import { AppNavigationBar, MobileNavigation, PortfolioButtonsSection } from "./components"
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { animate } from 'animejs'

// Add custom styles for scrollbar hiding
import './styles/scrollbar-hide.css';

function App() {
  const location = useLocation();
  const [visits, setVisits] = useState<number>(0);
  const visitCounterRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchVisits();

    if (visitCounterRef.current) {
      animate(visitCounterRef.current, {
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: 600,
        duration: 800,
        easing: 'easeOutElastic(1, 0.5)'
      });
    }

    // Add window resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchVisits = async () => {
    try {
      const response = await axios.get('https://api.igaurav.dev/api/v1/visits');
      setVisits(response.data);
      localStorage.setItem('websiteVisits', response.data.toString());
    } catch (error) {
      console.error('Error fetching visit count:', error);
    }
  };

  // Redirect to homepage if on profile route and screen is not large
  if (location.pathname === '/profile' && windowWidth < 1024) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen w-full">
      {/* Mobile Visit Counter - Only visible on small screens */}
      <div
        ref={visitCounterRef}
        className="md:hidden fixed top-4 right-4 z-40 opacity-0 flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 px-3 py-1.5 rounded-full border border-indigo-100/50 dark:border-indigo-500/20 shadow-md"
      >
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          <span className="text-xs">Visits:</span>
        </div>
        <div className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
          {visits.toLocaleString()}
        </div>
      </div>

      {/* Small screens: entire layout is scrollable */}
      <div className="md:hidden min-h-screen bg-gray-900 text-gray-100 pb-16">
        {/* Profile section and navigation - fixed position on top */}
        <div className="pt-14 pb-2 bg-gray-900 shadow-md">
          <div className="px-4 space-y-3">
            <ProfilePage />
            <PortfolioButtonsSection />
          </div>
          <MobileNavigation />
        </div>

        {/* Mobile content */}
        <div className="pt-5 px-4">
          <Outlet />
        </div>
      </div>

      {/* Medium to Large screens: split layout with fixed navigation */}
      <div className="hidden md:flex md:flex-row h-screen">
        {/* Left sidebar on large screens only */}
        <div className="hidden lg:flex lg:w-1/4 lg:h-screen lg:flex-col overflow-hidden bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
          <div className="flex-shrink-0 p-4 sticky top-0 z-10 backdrop-blur-sm bg-gray-50/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 px-1">Portfolio</h2>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-hide">
            <ProfilePage />
            <PortfolioButtonsSection />
          </div>
        </div>

        {/* Main content for medium and up */}
        <div className="w-full lg:w-3/4 flex flex-col h-screen bg-gray-900 text-gray-100">
          {/* Navigation bar - fixed at top */}
          <div className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <AppNavigationBar showProfileLink={false} />
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
