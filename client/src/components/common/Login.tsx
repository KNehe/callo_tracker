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
			<Title order={2} ta={'left'} mb={'lg'}>
				Login
			</Title>
			<Stack gap="1em" w={'50%'}>
				<TextInput
					label="Email"
					placeholder="Enter your email"
					value={email}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
				/>
				<PasswordInput
					label="Password"
					placeholder="Enter your password"
					value={password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
				/>
				<Button
					onClick={() => {
						// make API request to log user in
					}}
					variant="outline"
				>
					Log In
				</Button>
			</Stack>
		</LSLayout>
	);
};

export default Login;
