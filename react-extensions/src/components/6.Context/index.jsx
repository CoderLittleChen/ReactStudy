import React, { Component } from 'react';
import './index.css';

//创建context对象
const nameContext = React.createContext();
const { Provider, Consumer } = nameContext;
export default class A extends Component {
	state = {
		name: 'cm'
	};

	render() {
		return (
			<div className="parent">
				<h3>我是A组件</h3>
				<Provider value={this.state.name}>
					<B />
				</Provider>
			</div>
		);
	}
}

class B extends Component {
	render() {
		return (
			<div className="child">
				<h3>我是B组件</h3>
				<C />
			</div>
		);
	}
}

class C extends Component {
	//这里是定义自己的contextType类型
	//static contextType = nameContext;

	render() {
		return (
			<div className="grand">
				<h3>我是C组件</h3>
				{/* Sample */}
				{/* <ThemeContext.Consumer>
					{({ theme, toggleTheme }) => (
						<button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
							Toggle Theme
						</button>
					)}
				</ThemeContext.Consumer> */}

				{/* h4标签写在外部 */}
				<h4>
					<Consumer>{value => `我接收到的用户名：${value}`}</Consumer>
				</h4>

				{/* h4标签写在内部 */}
				{/* <Consumer>{value => <h4>我接收到的用户名:{value}</h4>}</Consumer> */}
			</div>
		);
	}
}
