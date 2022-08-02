import React, { Component } from 'react';
//引入connect
import { connect } from 'react-redux';
//引入action
import { createIncrementAction } from '../../redux/count_action';

class Count extends Component {
	handleClick = () => {
		this.props.add(1);
	};

	render() {
		return (
			<div>
				<h2>当前求和为:{this.props.count}</h2>
				<button onClick={this.handleClick}>点我加1</button>
			</div>
		);
	}
}

export default connect(state => ({ count: state }), { add: createIncrementAction })(Count);
