import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from '../styles/cart-dropdown.styles.jsx';
import { useNavigate } from 'react-router-dom';
import Button from './button.component';
import CartItem from './cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const gotToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={gotToCheckoutHandler}>Go to checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
