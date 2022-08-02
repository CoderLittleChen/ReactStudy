import React, { Component } from 'react';
import { Button } from 'antd';
//这里直接引入antd.css会有warning提示 改成antd.min.css
import 'antd/dist/antd.min.css';
//或者在App.css中引入antd.css 然后在js中引入App.css
// import './App.css';

export default class App extends Component {
	render() {
		return (
			<div>
				App
				<Button type="primary">按钮</Button>
			</div>
		);
	}
}
