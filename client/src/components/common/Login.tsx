import { useState } from 'react';
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
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<LSLayout>
			<Title order={2} ta={'left'}>
				Login
			</Title>
			<Stack gap="1em">
				<TextInput
					label="Email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordInput
					label="Password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
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
