import Button, { BUTTON_TYPES_CLASSES } from './button.component';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from '../styles/product-card.styles.jsx';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
		console.log(product + 'added to cart');
	};

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
