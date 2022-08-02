//这里的{Component}并不是解构赋值 是由于React中采取了多级暴露 不单单是一个默认暴露
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import List from './components/List/index';
import Footer from './components/Footer/index';

//创建类式组件
class App extends Component {
	state = {
		todoList: [
			{
				id: 1,
				name: 'Eat',
				isDone: true
			},
			{
				id: 2,
				name: 'Sleep',
				isDone: false
			},
			{
				id: 3,
				name: 'Play Game',
				isDone: false
			}
		]
	};

	//添加Item
	addToDo = itemObj => {
		const { todoList } = this.state;
		//console.log(todoList);
		todoList.push(itemObj);
		this.setState({
			todoList: todoList
		});
	};

	//更新Item
	updateToDo = (id, isDone) => {
		const { todoList } = this.state;
		//循环遍历list 更新
		for (let index = 0; index < todoList.length; index++) {
			const element = todoList[index];
			if (element.id === id) {
				element.isDone = isDone;
			}
		}
		this.setState({
			todoList: todoList
		});
	};

	//删除Item
	deleteToDo = id => {
		const { todoList } = this.state;
		//这里想要删除数组中的某个元素 直接使用Filter方法来实现 里面是进行删除的条件
		const newToDoList = todoList.filter(e => {
			return e.id !== id;
		});
		//console.log(newToDoList);
		this.setState({
			todoList: newToDoList
		});
	};

	//全选
	checkAll = flag => {
		console.log('@');
		const { todoList } = this.state;
		const newToDoList = todoList.map(e => {
			e.isDone = flag;
			return e;
		});
		this.setState({
			todoList: newToDoList
		});
	};

	//清除所有已完成任务 这里的清除指的是删除已完成任务 不是取消选中
	clearAllDone = () => {
		const { todoList } = this.state;
		const newToDoList = todoList.filter(e => {
			return e.isDone === false;
		});
		this.setState({
			todoList: newToDoList
		});
	};

	render() {
		const { todoList } = this.state;
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addToDo={this.addToDo} />
					<List todoList={todoList} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo} />
					<Footer todoList={todoList} checkAll={this.checkAll} clearAllDone={this.clearAllDone} />
				</div>
			</div>
		);
	}
}

//暴露App组件
export default App;
