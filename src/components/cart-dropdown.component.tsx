import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from './button.component';
import CartItem from './cart-item.component';
import { selectCartItems } from '../store/cart/cart.selector';
import {
	EmptyMessage,
	CartItems,
	CartDropdownContainer,
} from '../styles/cart-dropdown.styles';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
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
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
