import { screen } from '@testing-library/react';
import NavigationBar from '../components/routes/navigation-bar.component';
import { renderWithProviders } from '../utils/test/test.utils';
import { current } from '@reduxjs/toolkit';
import * as reactRedux from 'react-redux';
import { fireEvent } from '@testing-library/react';

describe('Navigation tests', () => {
	test('It should render a sign in link if there is no current user', () => {
		renderWithProviders(<NavigationBar></NavigationBar>, {
			preloadedState: {
				user: {
					currentUser: null,
				},
			},
		});
		const signInLink = screen.getByText(/sign in/i);
		expect(signInLink).toBeInTheDocument();
	});

	test('It should render a sign out link if there is a current user', () => {
		renderWithProviders(<NavigationBar></NavigationBar>, {
			preloadedState: {
				user: { currentUser: {} },
			},
		});
		const signOutLink = screen.getByText(/sign out/i);
		expect(signOutLink).toBeInTheDocument();

		const signInLink = screen.queryByText(/sign in/i);
		expect(signInLink).toBeNull();
	});

	test('it Should not render a cart dropdown if is cart open is false', () => {
		renderWithProviders(<NavigationBar />, {
			preloadedState: {
				cart: {
					isCartOpen: false,
					cartitems: [],
				},
			},
		});
		const cartDropdown = screen.queryByText(/Your cart is empty/i);
		expect(cartDropdown).toBeNull();
	});

	test('it Should  render a cart dropdown if is cart open is true', () => {
		renderWithProviders(<NavigationBar />, {
			preloadedState: {
				cart: {
					isCartOpen: true,
					cartitems: [],
				},
			},
		});
		const cartDropdown = screen.getByText(/Your cart is empty/i);
		expect(cartDropdown).toBeInTheDocument();
	});

	test('it should dispatch signoutstart action when clicking on the signout link', async () => {
		const mockDispatch = jest.fn();
		jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

		renderWithProviders(<NavigationBar />, {
			preloadedState: {
				user: {
					currentUser: {},
				},
			},
		});
		const signOutElement = screen.getByText(/sign out/i);
		expect(signOutElement).toBeInTheDocument();

		await fireEvent.click(signOutElement);
		expect(mockDispatch).toHaveBeenCalled();
		// expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

		mockDispatch.mockClear();
	});
});
