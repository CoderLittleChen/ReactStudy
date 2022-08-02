/*
  1.该文件是用于创建一个名为Count组件服务的reducer，reducer的本质就是一个函数
  2.reducer函数会接到两个参数，分别为 preState(之前的状态) action(动作对象)
*/

//引入常量
import { INCREMENT, DECREMENT } from '../constant';

const initState = 0;
//注意向外暴露 否则在外部无法访问
export default function countReducer(preState = initState, action) {
	//从action对象中获取type data。type决定操作类型 data是数据
	const { type, data } = action;
	switch (type) {
		case INCREMENT:
			return preState + data;
		case DECREMENT:
			return preState - data;
		default:
			return preState;
	}
}
