import { FormEvent, useState, ChangeEvent } from 'react';
import { AuthError, AuthErrorCodes, UserCredential } from 'firebase/auth';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import FormInput from './form-input.component';
import '../styles/sign-up-form.styles';
import Button from './button.component';

const defaultformFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultformFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultformFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const result: UserCredential | undefined =
				await createAuthUserWithEmailAndPassword(email, password);
			if (result) {
				const { user } = result;

				await createUserDocumentFromAuth(user, { displayName });
				resetFormFields();
			}
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.INVALID_AUTH_EVENT) {
				alert('Email already in use');
			} else {
				alert('Error creating user');
			}
			console.error('Error creating user:', error);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Sign up with your email and password</h2>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<Button type='submit'>Sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
