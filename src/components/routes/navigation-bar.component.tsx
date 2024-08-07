import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';
import {
	NavigationContainer,
	NavLink,
	NavLinks,
	LogoContainer,
} from '../../styles/navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon.component';
import CartDropdown from '../cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const NavigationBar = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink to='/' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/signIn'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default NavigationBar;
