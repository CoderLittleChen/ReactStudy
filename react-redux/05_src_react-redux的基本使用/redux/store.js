/*
  1.该文件用于暴露一个store对象 整个应用只有一个store对象
*/

//configureStore是createStore的改进版
import { configureStore } from '@reduxjs/toolkit';
//import thunkMiddleware from 'redux-thunk';
//引入为store组件服务的reducer
import countReducer from './count_reducer';

const store = configureStore({
	reducer: countReducer
	//middleware: [thunkMiddleware]
});

export default store;
