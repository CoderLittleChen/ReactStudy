//引入Count的UI组件
import CountUI from '../../components/Count';

//这里不能直接引入store 而是通过容器组件props的方式将store对象传给UI组件
//import store from '../../redux/store';

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';

//引入connect 该函数中，UI组件作为参数，会返回一个容器组件 和redux来交互
import { connect } from 'react-redux';

//react-redux中已经将state作为参数传给第一个函数参数
//该函数返回一个对象
function mapStateToProps(state) {
	return { count: state };
}

//该函数返回值也是对象 key:value是一个函数对象
function mapDispatchToProps(dispatch) {
	return {
		jia: number => {
			dispatch(createIncrementAction(number));
		},
		jian: number => {
			dispatch(createDecrementAction(number));
		},
		jiaasync: (number, time) => {
			dispatch(createIncrementAsyncAction(number, time));
		}
	};
}

//这里connect第一次调用的参数必须是两个function
//1.redux中保存的状态 以对象的形式
//2.操作状态的方法
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;
