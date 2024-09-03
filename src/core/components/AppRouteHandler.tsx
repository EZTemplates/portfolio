import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import HomePage from '../../pages/home/HomePage';

export const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
]);


