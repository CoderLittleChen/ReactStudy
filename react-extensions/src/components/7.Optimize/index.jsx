import React, { PureComponent } from 'react';
import './index.css';

export default class Demo extends PureComponent {
	state = {
		carName: 'Tesla'
	};

	handleClick = () => {
		this.setState({
			//这里如果什么都不更新 子组件也会调render 是因为shouldComponentUpdate 永远返回为true导致的
			carName: 'BMW'
		});
	};

	//两个参数
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return !(nextState.carName === this.state.carName);
	// }

	render() {
		console.log('parent--render');
		const { carName } = this.state;
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				<span>我的车名字是：{carName}</span>
				<button onClick={this.handleClick}>点我换车</button>
				<C carName="Benz" />
			</div>
		);
	}
}
class C extends PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return !(nextProps.carName === this.props.carName);
	// }

	render() {
		console.log('child--render');
		return (
			<div className="child">
				<h3>父组件的车名字为:{this.props.carName}</h3>
			</div>
		);
	}
}
