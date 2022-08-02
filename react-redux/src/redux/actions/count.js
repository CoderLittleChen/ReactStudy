/*
  1.该文件专门为Count组件生成action对象
  2.action对象如果是Object，则是同步action。如果是function，则是异步action。
*/

//引入常量
import { INCREMENT, DECREMENT } from '../constant';

export const increment = data => ({ type: INCREMENT, data });
export const decrement = data => ({ type: DECREMENT, data });
export const incrementAsync = (data, time) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(increment(data));
		}, time);
	};
};
