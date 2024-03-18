type LoginAndSignUpProps = {
	isLoginPage: boolean;
};

const LoginAndSignUpPage = (props: LoginAndSignUpProps) => {
	const { isLoginPage } = props;
	return <div>{isLoginPage ? 'Login' : 'Sign Up'}</div>;
};

export default LoginAndSignUpPage;
