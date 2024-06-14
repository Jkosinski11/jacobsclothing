import SignUpForm from '../../sign-up-form.component';
import SignInForm from './sign-in-form';
import '../../../styles/sign-in.styles.scss';

const SignIn = () => {
	return (
		<div className='authentification-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};
export default SignIn;
