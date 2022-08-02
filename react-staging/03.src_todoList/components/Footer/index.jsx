import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
	/*
    1.切记不能在render里调用setState 会引起无限递归
    2.当选中全部项的时候 最下方的checkbox也要选中 需要判断doneCount和totalCount是否一致 
    3.当CheckBox使用checked属性的时候 必须添加onChange事件,defaultChecked只在第一次有效果
      在全选和全不选中 需要将Item组件中的checkbox中的属性改成checked
  */
	state = { doneCount: 0, totalCount: 0 };

	//这里的event参数可以直接获取到 不用传
	handleCheckAll = event => {
		this.props.checkAll(event.target.checked);
	};

	clearAllDone = () => {
		this.props.clearAllDone();
	};

	render() {
		const { todoList } = this.props;
		const newToDoList = todoList.filter(e => {
			return e.isDone !== false;
		});

		const doneCount = newToDoList.length;
		const totalCount = todoList.length;

		return (
			<div className="todo-footer">
				<label>
					<input
						type="checkbox"
						checked={doneCount === totalCount && doneCount !== 0 ? true : false}
						onChange={this.handleCheckAll}
					/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{totalCount}
				</span>
				<button onClick={this.clearAllDone} className="btn btn-danger">
					清除已完成任务
				</button>
			</div>
		);
	}
}
