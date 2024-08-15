import { screen } from '@testing-library/react';

import { renderWithProviders } from '../utils/test/test.utils';
import Category from '../components/routes/category/category.component';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		category: 'mens',
	}),
}));

describe('Category tests', () => {
	test('it should render a spinner if loading is true', () => {
		renderWithProviders(<Category />, {
			preloadedState: {
				categories: {
					isLoading: true,
					categories: [],
				},
			},
		});
		const spinnerElement = screen.getByTestId('spinner-overlay');
		expect(spinnerElement).toBeInTheDocument();
	});

	test('it should render no spinner if isLoading is false', () => {
		renderWithProviders(<Category />, {
			preloadedState: {
				categories: {
					isLoading: false,
					categories: [],
				},
			},
		});
		const spinnerElement = screen.queryByTestId('spinner-overlay');
		expect(spinnerElement).toBeNull();
	});
	test('it should render caegories if isLoading is false', () => {
		renderWithProviders(<Category />, {
			preloadedState: {
				categories: {
					isLoading: false,
					categories: [
						{
							title: 'mens',
							items: [
								{
									id: 1,
									name: 'Product 1',
								},
								{
									id: 2,
									name: 'Product 2',
								},
							],
						},
					],
				},
			},
		});
		const spinnerElement = screen.queryByTestId('spinner-overlay');
		expect(spinnerElement).toBeNull();

		const product1Element = screen.getByText(/product 1/i);
		expect(product1Element).toBeInTheDocument();

		const product2Element = screen.getByText(/product 2/i);
		expect(product2Element).toBeInTheDocument();
	});
});
