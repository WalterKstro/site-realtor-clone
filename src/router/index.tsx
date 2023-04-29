import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import BuyPage from '../pages/BuyPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import Layout from '../components/layout/Layout';
import ErrorPage from '../ErrorPage';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "buy",
                element: <BuyPage />
            },
            {
                path: "profile",
                element: <ProfilePage />
            },
            {
                path: "sign-in",
                element: <SignInPage />
            },
            {
                path: "sign-up",
                element: <SignUpPage />
            },
            {
                path: "forgot-password",
                element: <ForgotPasswordPage />
            }
        ]
    }
]);

export default router;






















