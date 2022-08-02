import React, { Component } from 'react';
//引入store
import store from '../../redux/store';
//引入常量
import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../../redux/constant';
//引入执行动作的action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';

export default class Count extends Component {
	state = {
		carName: 'Tesla'
	};

	// componentDidMount() {
	// 	//检测redux中preState的变化 一旦变化 就调用render
	// 	store.subscribe(() => {
	// 		// console.log('@');
	// 		this.setState({});
	// 	});
	// }

	handleClick = dataType => {
		return () => {
			//let { result } = this.state;
			const { selectComponent } = this;
			let value = selectComponent.value;
			switch (dataType) {
				case INCREMENT:
					//dispatch 通知redix增加value
					//store.dispatch({ type: 'Increment', data: value * 1 });

					//直接传一个action对象
					store.dispatch(createIncrementAction(value * 1));
					break;
				case DECREMENT:
					//store.dispatch({ type: 'Decrement', data: value * 1 });
					store.dispatch(createDecrementAction(value * 1));
					break;
				case INCREMENTIFODD:
					if (store.getState() % 2 !== 0) {
						//store.dispatch({ type: 'IncrementIfOdd', data: value * 1 });
						store.dispatch(createIncrementAction(value * 1));
					}
					break;
				case INCREMENTASYNC:
					// setTimeout(() => {
					// 	//store.dispatch({ type: 'IncrementAsync', data: value * 1 });
					// 	store.dispatch(createIncrementAction(value * 1));
					// }, 500);
					store.dispatch(createIncrementAsyncAction(value * 1, 500));
					break;
				default:
					break;
			}
		};
	};

	render() {
		return (
			<div>
				<div>当前求和为:{store.getState()}</div>
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
