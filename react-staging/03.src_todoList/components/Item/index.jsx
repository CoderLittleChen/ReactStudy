import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
	/*
    1.这里checkbox是否选中 不能用checked属性，而是defaultChecked 这个属性表示默认是否选中 而且允许修改
    2.添加鼠标移入效果 即:显示删除按钮 选中当前Item背景变灰色
    3.对应CheckBox 想要确定是否选中，不能直接通过event.target.value来获取对应的值 只能拿到on,应该通过属性event.target.checked来获取
    4.子组件从父组件接收参数或者函数 方式都是一样的 获取的时候 都是通过this.props来获取的
  */
	//state 初始化
	state = { isChecked: false };

	handleMouse = flag => {
		//console.log('@');
		//这里如何给指定元素设置样式?
		//通过设置state来在样式里进行判断
		return () => {
			this.setState({
				isChecked: flag
			});
		};
	};

	//当CheckBox是否选中发生变化的时候 执行事件
	handleChange = id => {
		return event => {
			//输出id和当前是否选中
			//console.log(`id:${id},是否选中:${event.target.checked}`);
			const { updateToDo } = this.props;
			updateToDo(id, event.target.checked);
		};
	};

	handleDelete = id => {
		return () => {
			this.props.deleteToDo(id);
		};
	};

	render() {
		const { id, name, isDone } = this.props;
		const { isChecked } = this.state;
		return (
			<li
				style={{ backgroundColor: isChecked ? '#ddd' : 'white' }}
				onMouseOver={this.handleMouse(true)}
				onMouseOut={this.handleMouse(false)}
			>
				<label>
					<input onChange={this.handleChange(id)} type="checkbox" checked={isDone} />
					<span>{name}</span>
				</label>
				<button
					onClick={this.handleDelete(id)}
					className="btn btn-danger"
					style={{ display: isChecked ? 'block' : 'none' }}
				>
					删除
				</button>
			</li>
		);
	}
}
