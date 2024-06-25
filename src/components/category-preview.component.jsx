import ProductCard from './product-card.component.jsx';
import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from '../styles/category-preview.styles.jsx';
import { Link } from 'react-router-dom';
const CategoryPreview = ({ title, products }) => {
	return (
		<>
			<CategoryPreviewContainer>
				<Title>
					<Link className='nav-link' to={title}>
						{title.toUpperCase()}
					</Link>
				</Title>
				<Preview>
					{products
						.filter((_, idx) => idx < 4)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</Preview>
			</CategoryPreviewContainer>
		</>
	);
};

export default CategoryPreview;
