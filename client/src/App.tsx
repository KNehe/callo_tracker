import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import HomePage from './components/pages/HomePage';
import LoginAndSignUpPage from './components/pages/LoginAndSignUpPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/home',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <LoginAndSignUpPage isLoginPage />,
	},
	{
		path: '/signup',
		element: <LoginAndSignUpPage isLoginPage />,
	},
]);

function App() {
	// derive user data from auth provider
	// improve redirect logic to only affect pages that are not the landing page
	// if (!user) {
	// 	redirect('/login')
	// }

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
