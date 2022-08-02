import React, { Component } from 'react';

export default class News extends Component {
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		//2s过后自动跳转带Message
	// 		this.props.history.push('/home/message');
	// 	}, 2000);
	// }

	render() {
		return (
			<div>
				<ul>
					<li>new001</li>
					<li>new002</li>
					<li>new003</li>
				</ul>
			</div>
		);
	}
}
