import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home.component';
import NavigationBar from './components/routes/navigation-bar.component';
import SignIn from './components/routes/sign-in/sign-in.component';
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout-component';
const App = () => {
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
