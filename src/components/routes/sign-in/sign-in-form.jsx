import Button, { BUTTON_TYPES_CLASSES } from '../../button.component';
import FormInput from '../../form-input.component';
import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../../utils/firebase/firebase.utils';
import {
	SignInContainer,
	H2,
	ButtonsContainer,
} from '../../../styles/sign-in-form.styles.jsx';
import { useState } from 'react';

const defaultformFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultformFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultformFields);
	};

	const logGoogleUser = async () => {
		await signInWithGooglePopup();
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(response);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/user-not-found':
					alert('user not found');
					break;
				case 'auth/wrong-password':
					alert('incorrect password');
					break;
				default:
					console.log(error);
			}

			console.log(error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<H2>I already have an account</H2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<ButtonsContainer>
					<Button type='submit'>Sign in</Button>
					<Button
						buttonType={BUTTON_TYPES_CLASSES.google}
						onClick={logGoogleUser}
					>
						Sign in with google
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
