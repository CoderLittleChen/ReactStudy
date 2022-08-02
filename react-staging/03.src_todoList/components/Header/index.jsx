import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {
	addItem = event => {
		//1.Enter 按键的keyCode为13，可以直接通过event.keyCode测试获得
		//2.添加之后 如何传回父组件，涉及到子组件给父组件传值问题?
		//  实现：需要父组件给子组件通过props传一个函数
		//3.nanoid 导入之后是一个函数 返回由随机字符组成的id

		if (event.target.value === '') {
			alert('输入内容不能为空！');
			return;
		}

		if (event.keyCode === 13) {
			//执行添加操作
			//生成要添加的对象
			const itemObj = {
				id: nanoid(),
				name: event.target.value,
				isDone: false
			};
			//通过props拿到list
			const { addToDo } = this.props;
			addToDo(itemObj);
			//添加完成 清空输入框
			event.target.value = '';
		}
	};

	render() {
		return (
			<div className="todo-header">
				<input type="text" onKeyUp={this.addItem} placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		);
	}
}
