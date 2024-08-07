import SignUpForm from '../../sign-up-form.component';
import SignInForm from './sign-in-form';
import { AuthentificationContainer } from '../../../styles/sign-in.styles';

const SignIn = () => {
	return (
		<AuthentificationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthentificationContainer>
	);
};
export default SignIn;
