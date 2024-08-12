import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');

render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate persistor={persistor}> */}
			<BrowserRouter>
				<App />
			</BrowserRouter>
			{/* </PersistGate> */}
		</Provider>
	</React.StrictMode>,
	container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
