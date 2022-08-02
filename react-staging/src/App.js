import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import List from './components/List';

export default class App extends Component {
	//在App.js中保存state对象 方便两个子组件通讯
	state = {
		users: [],
		isFirst: true,
		isLoading: false,
		err: ''
	};

	updateAppState = stateObj => {
		this.setState(stateObj);
	};

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState} />
				<List {...this.state} />
			</div>
		);
	}
}
