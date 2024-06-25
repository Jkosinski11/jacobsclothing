import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import FormInput from '../components/form-input.component';
import '../styles/sign-up-form.styles.jsx';
import Button from '../components/button.component';

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

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
			console.log('User created successfully:', user);
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Email already in use');
			} else {
				alert('Error creating user');
			}
			console.error('Error creating user:', error);
		}
	};

	const handleChange = (event) => {
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
