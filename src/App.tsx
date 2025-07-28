import { Outlet, useLocation, Navigate } from 'react-router-dom'
import ProfilePage from "./sections/profile/MyProfileComponent"
import { AppNavigationBar, MobileNavigation, PortfolioButtonsSection } from "./components"
import { useEffect, useState } from 'react'
import './styles/scrollbar-hide.css';
import { useFetchFilter } from './core/hooks/useFetchFilter'
import LoadingView from './components/LoadingView';
import { useFetchProfile } from './core/hooks/useFetchProfile';


function App() {
  useFetchProfile();
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isLoading } = useFetchFilter();

  useEffect(() => {
    setupWindowResizeListener();
  }, []);

  const setupWindowResizeListener = () => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  // Show loading screen while data is being fetched
  if (isLoading) {
    return <LoadingView />;
  }

  // Redirect to homepage if on profile route and screen is not large
  if (location.pathname === '/profile' && windowWidth < 1024) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen w-full">
      {/* Small screens: entire layout is scrollable */}
      <div className="md:hidden min-h-screen bg-gray-900 text-gray-100 pb-16">
        <div className="pt-14 pb-2 bg-gray-900 shadow-md">
          <div className="px-4 space-y-3">
            <ProfilePage />
            <PortfolioButtonsSection />
          </div>
          <MobileNavigation />
        </div>
        <div className="pt-5 px-4">
          <Outlet />
        </div>
      </div>

      {/* Medium to Large screens: split layout with fixed navigation */}
      <div className="hidden md:flex md:flex-row h-screen">
        <div className="hidden lg:flex lg:w-1/4 lg:h-screen lg:flex-col overflow-hidden bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
          <div className="flex-shrink-0 p-4 sticky top-0 z-10 backdrop-blur-sm bg-gray-50/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 px-1">Portfolio</h2>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-hide">
            <ProfilePage />
            <PortfolioButtonsSection />
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col h-screen bg-gray-900 text-gray-100">
          <div className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <AppNavigationBar showProfileLink={false} />
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
