import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AboutUs from '../sections/AboutUs';
import ExpPage from '../sections/ExpPage';
import ProjectSection from '../sections/ProjectSection';
import HomeSkillsSection from '../sections/HomeSkillsSection';
import CommunitySection from '../sections/CommunitySection';

export const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutUs />
            },
            {
                path: "experience",
                element: <ExpPage />
            },
            {
                path: "projects",
                element: <ProjectSection />
            },
            {
                path: "skills",
                element: <HomeSkillsSection />
            },
            {
                path: "community",
                element: <CommunitySection />
            }
        ]
    }
]);


