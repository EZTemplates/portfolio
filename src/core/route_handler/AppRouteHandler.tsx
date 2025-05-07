import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import AboutUs from '../../sections/about_me/AboutMeComponent';
import ExpPage from '../../sections/experience/MyExperienceComponent';
import ProjectSection from '../../sections/project/MyProjectComponent';
import HomeSkillsSection from '../../sections/HomeSkillsSection';
import CommunitySection from '../../sections/MyActivitiesComponent';
import Error404Page from '../../sections/Error404Page';

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
    },
    {
        path: "404",
        element: <Error404Page onReset={() => { }} />
    },
    {
        path: "*",
        element: <Error404Page onReset={() => { }} />
    }
]);


