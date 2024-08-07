interface User {
	displayName: string | null | undefined;
	id: string;
	name: string;
	email: string;
}

interface UserState {
	currentUser: User | null;
}

interface RootState {
	user: UserState;
}

export const selectCurrentUser = (state: RootState): User | null =>
	state.user.currentUser;
