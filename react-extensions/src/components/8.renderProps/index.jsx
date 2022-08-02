import React, { Component } from 'react';
import './index.css';
import C from '../1.stateHook';

export default class index extends Component {
	render() {
		return (
			<div className="parent">
				<h1>我是Parent组件</h1>
				<A render={name => <C name={name} />} />
			</div>
		);
	}
}

class A extends Component {
	state = { name: 'tom' };
	render() {
		return (
			<div className="child">
				<h1>我是A组件</h1>
				{/* {this.props.children} */}
				{this.props.render(this.state.name)}
				{/* <B /> */}
			</div>
		);
	}
}

class B extends Component {
	render() {
		return (
			<div className="grand">
				<h1>我是B组件,接收到的name为:{this.props.name}</h1>
			</div>
		);
	}
}
