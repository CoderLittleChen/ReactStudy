import React, { Component } from 'react';
//这里应该改成引入容器组件
import Count from './containers/Count';
import Person from './containers/Person';

export default class App extends Component {
	render() {
		return (
			<div>
				<Count />
				<hr />
				<Person />
			</div>
		);
	}
}
