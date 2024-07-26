import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector.js';
import { useSelector } from 'react-redux';

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from '../../styles/checkout.styles.jsx';
import CheckoutItem from '../checkout-item.component';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>product</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>description</span>
				</HeaderBlock>

				<HeaderBlock>
					<span>quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total as='span'>Total: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
