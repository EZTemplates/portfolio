import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import AboutUs from '../../sections/about_me/AboutMeComponent';
import ExpPage from '../../sections/experience/MyExperienceComponent';
import ProjectSection from '../../sections/project/MyProjectComponent';
import HomeSkillsSection from '../../sections/HomeSkillsSection';
import Error404Page from '../../sections/Error404Page';
import BlogsSection from '../../sections/blogs/BlogsSection';
import BlogDetailsSection from '../../sections/blogs/BlogDetailsSection';

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
                path: "blogs",
                element: <BlogsSection />
            },
            {
                path: "blogs/:id",
                element: <BlogDetailsSection />
            },
            {
                path: "about",
                element: <AboutUs />
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


