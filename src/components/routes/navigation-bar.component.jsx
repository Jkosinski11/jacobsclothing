import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
	NavigationContainer,
	NavLink,
	NavLinks,
	LogoContainer,
} from '../../styles/navigation.styles.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon.component';
import CartDropdown from '../cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

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
						<NavLink as='span' onClick={signOutUser}>
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
