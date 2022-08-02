import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
	go = () => {
		//2 前进2步 -2 后退两步
		this.props.history.go(2);
	};

	goBack = () => {
		this.props.history.goBack();
	};

	goForward = () => {
		this.props.history.goForward();
	};

	render() {
		return (
			<div className="page-header">
				<h1>React Router Demo</h1>
				<button onClick={this.goBack}>后退</button>
				<button onClick={this.goForward}>前进</button>
				<button onClick={this.go}>Go</button>
			</div>
		);
	}
}

export default withRouter(Header);
