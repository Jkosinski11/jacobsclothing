import { createSelector } from 'reselect';

interface Category {
	title: string;
	items: any[];
}

interface CategoriesState {
	categories: Category[];
	isLoading: boolean;
}

interface RootState {
	categories: CategoriesState;
}

const selectCategoryReducer = (state: RootState): CategoriesState =>
	state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories: Category[]) =>
		categories.reduce<Record<string, any[]>>((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice: CategoriesState) => categoriesSlice.isLoading
);
