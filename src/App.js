import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home.component';
import NavigationBar from './components/routes/navigation-bar.component';
import SignIn from './components/routes/sign-in/sign-in.component';
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout-component';
import { setCurrentUser } from './store/user/user.reducer';
import { onAuthStateChanged } from 'firebase/auth';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			const pickedUser =
				user && (({ accessToken, email }) => ({ accessToken, email }(user)));
			dispatch(setCurrentUser(pickedUser));
		});
		return unsubscribe;
	}, []);

	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path='/shop/*' element={<Shop />} />
				<Route path='/signIn' element={<SignIn />} />
				<Route path='/checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
