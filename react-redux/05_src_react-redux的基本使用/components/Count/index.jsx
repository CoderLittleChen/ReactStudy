import React, { Component } from 'react';
//引入常量
import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../../redux/constant';

export default class Count extends Component {
	state = {
		carName: 'Tesla'
	};

	handleClick = dataType => {
		return () => {
			const { selectComponent } = this;
			let value = selectComponent.value;
			switch (dataType) {
				case INCREMENT:
					this.props.jia(value * 1);
					break;
				case DECREMENT:
					this.props.jian(value * 1);
					break;
				case INCREMENTIFODD:
					if (this.props.count % 2 !== 0) {
						this.props.jia(value * 1);
					}
					break;
				case INCREMENTASYNC:
					this.props.jiaasync(value * 1, 500);
					break;
				default:
					break;
			}
		};
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<div>当前求和为:{this.props.count}</div>
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
