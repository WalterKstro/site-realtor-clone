import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Offers from '../pages/OffersPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/sign-in",
        element: <SignInPage />
    },
    {
        path: "/sign-up",
        element: <SignUpPage />
    },
    {
        path: "/offers",
        element: <Offers />
    },
    {
        path: "/forgot-password",
        element: <ForgotPasswordPage />
    }
]);

export default router;