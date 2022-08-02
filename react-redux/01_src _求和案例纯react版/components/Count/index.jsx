import React, { Component } from 'react';

export default class Count extends Component {
	/*
    1.如何使用refs来获取到select组件选中的值？
      ref={currentNode=>this.selectComponent = currentNode}
      给ref传内联函数 组件对象是直接绑定到this对象上 直接在this上解构赋值
    2.button按钮的点击事件？
      根据dataType来区分不同的点击事件 写成高阶函数 柯里化的形式
    3.直接获取select组件的值 拿到的是string类型，可以用Number()函数转换一下 或者直接value*1

  */

	state = {
		result: 0
	};

	handleClick = dataType => {
		return () => {
			let { result } = this.state;
			const { selectComponent } = this;
			let value = selectComponent.value;
			switch (dataType) {
				case 'Increment':
					this.setState({
						result: (result += value * 1)
					});
					break;
				case 'Minus':
					this.setState({
						result: (result -= value * 1)
					});
					break;
				case 'IncrementIfOdd':
					if (result % 2 !== 0) {
						this.setState({
							result: (result += value * 1)
						});
					}
					break;
				case 'IncrementAsync':
					setTimeout(() => {
						this.setState({
							result: (result += value * 1)
						});
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
				<div>当前求和为:{this.state.result}</div>
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
