import React from 'react';
//import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

const container = document.getElementById('root');

render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Elements stripe={stripePromise}>
					<App />
				</Elements>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
