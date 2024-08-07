import { CartIconContainer, ItemCount } from '../styles/cart-icon.styles';

import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../store/cart/cart.selector';
import { setIsCartOpen } from '../store/cart/cart.reducer';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount as='span'>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
