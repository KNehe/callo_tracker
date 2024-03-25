import { Button, PasswordInput, Stack, TextInput, Title } from '@mantine/core';
import LSLayout from './Login-SignUp-Layout';
import { useState } from 'react';

const SignUp = () => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<LSLayout>
			<Title order={2} ta={'left'}>
				Create An Account
			</Title>
			<Stack gap="1em">
				<TextInput
					label="Full Name"
					placeholder="Enter your full name"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
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
						// make API request to create new user
					}}
					variant="outline"
				>
					Sign Up
				</Button>
			</Stack>
		</LSLayout>
	);
};

export default SignUp;
