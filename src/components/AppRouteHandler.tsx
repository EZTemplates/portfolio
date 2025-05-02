import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AboutUs from '../sections/AboutMeComponent';
import ExpPage from '../sections/MyExperienceComponent';
import ProjectSection from '../sections/MyProjectComponent';
import HomeSkillsSection from '../sections/HomeSkillsSection';
import CommunitySection from '../sections/MyActivitiesComponent';

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
                path: "profile",
                element: <AboutUs /> // Redirect to About page on profile path for consistency
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


