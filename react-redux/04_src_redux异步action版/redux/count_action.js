/*
  1.该文件专门为Count组件生成action对象
  2.action对象如果是Object，则是同步action。如果是function，则是异步action。
*/

import { INCREMENT, DECREMENT } from './constant';
// import store from './store';

export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });
export const createIncrementAsyncAction = (data, time) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(createIncrementAction(data));
		}, time);
	};
};
