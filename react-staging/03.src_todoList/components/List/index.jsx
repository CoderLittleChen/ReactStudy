import React, { Component } from 'react';
import './index.css';
//引入Item
import Item from '../Item/index';

export default class List extends Component {
	/*
    1.这里接收App组件中传过来的props,如果参数是数组,直接传就好(todoList = {todoList})
    2.这里注意是map中遍历的Item必须有一个key值，而不是在Item中的li标签中添加key属性。
      需要加key的元素是map方法中的标签
    3.props传之前是数组，那么state = this.props，state中对应的也是数组，传的是对象 接收的也是对象
  */

	// state = {
	//   todoList:this.props.todoList
	// }

	render() {
		//这里拿到的是一个数组,也可以通过解构赋值的方式直接从props中获取
		const { todoList, updateToDo, deleteToDo } = this.props;
		return (
			<div>
				<ul className="todo-main">
					{todoList.map((e, i) => {
						return <Item key={e.id} {...e} updateToDo={updateToDo} deleteToDo={deleteToDo} />;
					})}
					{/* <Item /> */}
				</ul>
			</div>
		);
	}
}
