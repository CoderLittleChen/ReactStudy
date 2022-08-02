import { createStore } from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
//引入为store组件服务的reducer
import countReducer from './count_reducer';
export default function configureStore(preloadState) {
	const store = createStore(countReducer);
}
