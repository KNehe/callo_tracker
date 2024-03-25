import { useLocation } from 'react-router-dom';
import Login from '../common/Login';
import SignUp from '../common/SignUp';

const LoginAndSignUpPage = () => {
	const location = useLocation();
	const isLoginPage = location.pathname === '/login';

	return (
		<div>
			<div>{isLoginPage ? <Login /> : <SignUp />}</div>
		</div>
	);
};

export default LoginAndSignUpPage;
