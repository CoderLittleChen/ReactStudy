import React, { Component } from 'react';

//引入connect 该函数中，UI组件作为参数，会返回一个容器组件 和redux来交互
import { connect } from 'react-redux';

//这里不能直接引入store 而是通过容器组件props的方式将store对象传给UI组件
//import store from '../../redux/store';

import { increment, decrement, incrementAsync } from '../../redux/actions/count';

//引入常量
import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../../redux/constant';

//向外暴露的是容器组件 UI组件的export去掉
class Count extends Component {
	state = {
		carName: 'Tesla'
	};

	handleClick = dataType => {
		return () => {
			const { selectComponent } = this;
			let value = selectComponent.value;
			switch (dataType) {
				case INCREMENT:
					this.props.increment(value * 1);
					break;
				case DECREMENT:
					this.props.decrement(value * 1);
					break;
				case INCREMENTIFODD:
					if (this.props.count % 2 !== 0) {
						this.props.increment(value * 1);
					}
					break;
				case INCREMENTASYNC:
					this.props.incrementAsync(value * 1, 500);
					break;
				default:
					break;
			}
		};
	};

	render() {
		return (
			<div>
				<div>
					<h2>我是Count组件,下面组件数组长度为:{this.props.persons.length}</h2>
					<h4>当前求和为:{this.props.count}</h4>
				</div>
				<select name="" id="" ref={currentNode => (this.selectComponent = currentNode)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				&nbsp;&nbsp;
				<button onClick={this.handleClick(INCREMENT)}>+</button>&nbsp;&nbsp;
				<button onClick={this.handleClick(DECREMENT)}>-</button>&nbsp;&nbsp;
				<button onClick={this.handleClick(INCREMENTIFODD)}>奇数时候加</button>&nbsp;&nbsp;
				<button onClick={this.handleClick(INCREMENTASYNC)}>异步加</button>
			</div>
		);
	}
}

//react-redux中已经将state作为参数传给第一个函数参数
//该函数返回一个对象
function mapStateToProps(state) {
	return { count: state };
}

//该函数返回值也是对象 key:value是一个函数对象
function mapDispatchToProps(dispatch) {
	return {
		jia: number => {
			dispatch(increment(number));
		},
		jian: number => {
			dispatch(decrement(number));
		},
		jiaasync: (number, time) => {
			dispatch(incrementAsync(number, time));
		}
	};
}

//这里connect第一次调用的参数必须是两个function
//1.redux中保存的状态 以对象的形式
//2.操作状态的方法

//原来的复杂写法
//const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

const CountContainer = connect(
	state => ({
		count: state.sum,
		persons: state.persons
	}),
	{
		//mapDispatchToProps的简写方式 直接传对应的action，react-redux会自动进行dispatch
		increment,
		decrement,
		incrementAsync
	}
)(Count);

export default CountContainer;
