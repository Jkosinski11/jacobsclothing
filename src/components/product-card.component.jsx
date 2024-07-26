import Button, { BUTTON_TYPES_CLASSES } from './button.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cart/cart.reducer.js';

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from '../styles/product-card.styles.jsx';

const ProductCard = ({ product }) => {
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
