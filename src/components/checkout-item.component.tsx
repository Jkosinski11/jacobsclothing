import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Quantity,
	Price,
	Arrow,
	Value,
	RemoveButton,
} from '../styles/checkout-item.styles';
import { useDispatch } from 'react-redux';
import {
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} from '../store/cart/cart.reducer';
import { FC } from 'react';

export type CheckoutItems = {
	name: string;
	imageurl?: string;
	price: number;
	quantity: number;
};

type CheckoutItemsProps = {
	cartItem: CheckoutItems;
};

const CheckoutItem: FC<CheckoutItemsProps> = ({ cartItem }) => {
	const { name, imageurl, price, quantity } = cartItem;
	const dispatch = useDispatch();

	const handleRemoveItem = () => {
		dispatch(clearItemFromCart(cartItem));
	};
	const addItemHandler = () => dispatch(addItemToCart(cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageurl} alt={`${name}`} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value as='span'>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={handleRemoveItem}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
