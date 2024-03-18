import { Title } from '@mantine/core';
import Login from '../common/Login';
import SignUp from '../common/SignUp';

type LoginAndSignUpProps = {
	isLoginPage: boolean;
};

const LoginAndSignUpPage = (props: LoginAndSignUpProps) => {
	const { isLoginPage } = props;
	return (
		<div>
			<div>{isLoginPage ? <Login /> : <SignUp />}</div>
		</div>
	);
};

export default LoginAndSignUpPage;
