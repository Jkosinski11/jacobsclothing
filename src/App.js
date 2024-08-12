import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setCurrentUser } from './store/user/user.reducer';
import Spinner from './components/spinner.component';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

const Home = lazy(() => import('./components/routes/home.component'));
const NavigationBar = lazy(() =>
	import('./components/routes/navigation-bar.component')
);
const SignIn = lazy(() =>
	import('./components/routes/sign-in/sign-in.component')
);
const Shop = lazy(() => import('./components/routes/shop/shop.component'));
const Checkout = lazy(() => import('./components/routes/checkout-component'));

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
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path='/' element={<NavigationBar />}>
					<Route index element={<Home />} />
					<Route path='/shop/*' element={<Shop />} />
					<Route path='/signIn' element={<SignIn />} />
					<Route path='/checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
