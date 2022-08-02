/*
  1.该文件用于暴露一个store对象 整个应用只有一个store对象
*/

//configureStore是createStore的改进版
//combineReducer用来合并多个reducer
import { configureStore, combineReducers } from '@reduxjs/toolkit';

//在reactjs/toolkit中
//默认集成了可执行异步action的middleware redux-thunk
//默认集成redux-devtools-extension 不需要额外的配置就可以使用该tools
//import thunkMiddleware from 'redux-thunk';
//mport { composeWithDevtools } from 'redux-devtools-extension';

//引入countReducer
import countReducer from './reducers/count';
//引入personReducer
import personReducer from './reducers/person';

const finalReducer = combineReducers({
	sum: countReducer,
	persons: personReducer
});

const store = configureStore({
	reducer: finalReducer
	//middleware: [thunkMiddleware]
});

export default store;
