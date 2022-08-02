//本质是一个函数 将Person对象添加后结果返回
//引入常量模块
import { ADDPERSON } from '../constant';

//设置init
const initState = [{ id: 1, name: 'cm', age: 18 }];
export default function person(preState = initState, action) {
	//从action对象中获取type和data
	const { type, data } = action;
	switch (type) {
		case ADDPERSON:
			return [data, ...preState];
		default:
			return preState;
	}
}
