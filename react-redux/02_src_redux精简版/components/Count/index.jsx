import React, { Component } from 'react';
//引入store
import store from '../../redux/store';

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
				case 'Increment':
					// this.setState({
					// 	result: (result += value * 1)
					// });
					//dispatch 通知redix增加value
					store.dispatch({ type: 'Increment', data: value * 1 });
					break;
				case 'Decrement':
					// this.setState({
					// 	result: (result -= value * 1)
					// });
					store.dispatch({ type: 'Decrement', data: value * 1 });
					break;
				case 'IncrementIfOdd':
					if (store.getState() % 2 !== 0) {
						// this.setState({
						// 	result: (result += value * 1)
						// });
						store.dispatch({ type: 'IncrementIfOdd', data: value * 1 });
					}
					break;
				case 'IncrementAsync':
					setTimeout(() => {
						// this.setState({
						// 	result: (result += value * 1)
						// });
						store.dispatch({ type: 'IncrementAsync', data: value * 1 });
					}, 500);
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
				<button onClick={this.handleClick('Increment')}>+</button>&nbsp;&nbsp;
				<button onClick={this.handleClick('Minus')}>-</button>&nbsp;&nbsp;
				<button onClick={this.handleClick('IncrementIfOdd')}>奇数时候加</button>&nbsp;&nbsp;
				<button onClick={this.handleClick('IncrementAsync')}>异步加</button>
			</div>
		);
	}
}
