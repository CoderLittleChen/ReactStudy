import React, { Component } from 'react';
//这里应该改成引入容器组件
import Count from './containers/Count';

import store from './redux/store';

export default class App extends Component {
	render() {
		return <Count store={store} />;
	}
}
