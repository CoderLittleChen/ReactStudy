import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
	getStudents = () => {
		axios.get('http://localhost:3000/students').then(
			response => {
				console.log('成功了', response.data);
			},
			error => {
				console.log('失败了', error.message);
			}
		);
	};

	render() {
		return (
			<div>
				<button onClick={this.getStudents}>获取学生数据</button>
			</div>
		);
	}
}
