import {
	Button,
	Container,
	PasswordInput,
	Stack,
	TextInput,
	Title,
} from '@mantine/core';

const Login = () => {
	return (
		<div>
			<Container>
				<Title>Login</Title>
				<Stack>
					<TextInput
						leftSectionPointerEvents="none"
						label="Enter your email"
						placeholder="Enter your email"
					/>
					<PasswordInput
						label="Password"
						description="Enter your password"
						placeholder="Enter your password"
					/>
				</Stack>
				<Button
					onClick={() => {
						// make API request to log user in
					}}
				>
					Submit
				</Button>
			</Container>
		</div>
	);
};

export default Login;
