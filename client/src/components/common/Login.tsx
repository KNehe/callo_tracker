import {
	Button,
	Container,
	PasswordInput,
	Stack,
	TextInput,
	Title,
} from '@mantine/core';
import LSLayout from './Login-SignUp-Layout';

const Login = () => {
	return (
		<LSLayout>
			<Title order={2} ta={'left'}>
				Login
			</Title>
			<Stack gap="1em">
				<TextInput label="Email" placeholder="Enter your email" />
				<PasswordInput label="Password" placeholder="Enter your password" />
				<Button
					onClick={() => {
						// make API request to log user in
					}}
					variant="filled"
				>
					Log In
				</Button>
			</Stack>
		</LSLayout>
	);
};

export default Login;
