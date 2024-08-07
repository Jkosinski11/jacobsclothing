import ProductCard from './product-card.component';
import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from '../styles/category-preview.styles';
import { Link } from 'react-router-dom';
import { FC } from 'react';

type Product = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

type ProductProps = {
	product: Product;
	id: number;
	imageUrl: string;
	name: string;
	price: number;
	_: any;
	idx: any;
};

type CategoryPreviewProps = {
	title: string;
	products: ProductProps[];
};
const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
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
