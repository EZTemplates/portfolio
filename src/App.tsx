import AppNavigationBar from "./core/components/AppNavigationBar"
import FooterComponent from "./core/components/FooterComponent"
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <AppNavigationBar />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App
