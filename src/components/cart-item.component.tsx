import { FC } from 'react';
import {
	CartItemContainer,
	ItemDetails,
	Name,
} from '../styles/cart-item.styles';

type CartItems = {
	name: string;
	imageUrl?: string;
	quantity: number;
	price: number;
};

type CartItemProps = {
	cartItem: CartItems;
};
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name>{name}</Name>

				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
