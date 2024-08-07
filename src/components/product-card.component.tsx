import Button, { BUTTON_TYPES_CLASSES } from './button.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cart/cart.reducer';

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from '../styles/product-card.styles';
import { FC } from 'react';

type CategoryItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const addProductToCart = () => dispatch(addItemToCart(product));

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name> {name}</Name>
				<Price>{price}</Price>
				<Button
					buttonType={BUTTON_TYPES_CLASSES.inverted}
					onClick={addProductToCart}
				>
					Add to Cart
				</Button>
			</Footer>
		</ProductCardContainer>
	);
};

export default ProductCard;
