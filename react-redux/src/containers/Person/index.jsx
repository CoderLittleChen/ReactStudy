import React, { Component } from 'react';
//引入connect
import { connect } from 'react-redux';
//引入nanoid
import { nanoid } from 'nanoid';
//引入addPersonAction
import { addPerson } from '../../redux/actions/person';

class Person extends Component {
	handleClick = () => {
		const name = this.nameNode.value;
		const age = this.ageNode.value;
		const personObj = {
			id: nanoid(),
			name: name,
			age: age
		};
		this.props.addPerson(personObj);
		this.nameNode.value = '';
		this.ageNode.value = '';
	};

	render() {
		return (
			<div>
				<h2>我是Person组件,上面组件求和结果为:{this.props.count}</h2>
				Name:
				<input type="text" ref={currentNode => (this.nameNode = currentNode)} />
				Age:
				<input type="text" ref={currentNode => (this.ageNode = currentNode)} />
				<button onClick={this.handleClick}>添加</button>
				<ul>
					{this.props.persons.map(personObj => {
						return (
							<li key={personObj.id}>
								{personObj.name}---{personObj.age}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		count: state.sum,
		persons: state.persons
	}),
	{
		addPerson
	}
)(Person);
