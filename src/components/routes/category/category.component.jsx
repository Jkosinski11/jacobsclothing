import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../../contexts/products.context';
import ProductCard from '../../product-card.component';
import {
	CategoryContainer,
	CategoryTitle,
} from '../../../styles/category.styles.jsx';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<CategoryTitle as='h2'>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</>
	);
};

export default Category;
