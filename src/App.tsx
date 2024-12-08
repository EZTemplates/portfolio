import AppNavigationBar from "./components/AppNavigationBar"
import { Outlet } from 'react-router-dom'
import ProfilePage from "./sections/ProfilePage"
import PortfolioButtonsSection from "./components/PortfolioButtonsSection"
import VisitCounter from './components/VisitCounter'

function App() {
  return (
    <div className="min-h-screen w-full container mx-auto">
      <div className="flex flex-col md:flex-row lg:h-screen">
        <div className="w-full md:w-1/3 flex flex-col md:overflow-auto">
          <div className="p-4 rounded-lg">
            <ProfilePage />
          </div>
          <div className="p-4 space-y-2">
            <PortfolioButtonsSection />
          </div>
          <div className="p-4">
            <VisitCounter />
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col">
          <div className="lg:h-16">
            <AppNavigationBar />
          </div>
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
