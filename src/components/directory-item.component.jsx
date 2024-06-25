import { useNavigate } from 'react-router-dom';

import {
	BackgroundImage,
	DirectoryBody,
	DirectoryItemContainer,
} from '../styles/directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();

	const onNavigatehandler = () => navigate(route);
	return (
		<DirectoryItemContainer onClick={onNavigatehandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<DirectoryBody>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryBody>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
