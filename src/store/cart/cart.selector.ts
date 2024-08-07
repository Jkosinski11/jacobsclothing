import { createSelector } from 'reselect';

interface CartItem {
	id: string;
	name: string;
	quantity: number;
	price: number;
}

interface CartState {
	cartItems: CartItem[];
	isLoading: boolean;
	isCartOpen: boolean;
}

interface RootState {
	cart: CartState;
}

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cartState: CartState) => cartState.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart: CartState) => cart.isCartOpen
);

export const selectCartCount = createSelector(
	[selectCartItems],
	(cartItems: CartItem[]) =>
		cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems: CartItem[]) =>
		cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		)
);
