import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
//通过Provider来给子组件传递store对象
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
