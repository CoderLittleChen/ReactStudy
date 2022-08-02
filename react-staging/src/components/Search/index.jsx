import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
	//createRef()生成的对象直接保存在this对象上面
	myRef = React.createRef();

	handleSearch = () => {
		const { updateAppState } = this.props;
		//1.获取用户的输入(连续解构赋值+重命名)
		const {
			myRef: {
				current: { value: keyword }
			}
		} = this;
		//修改状态
		updateAppState({ isFirst: false, isLoading: true });
		//2.发送网络请求 所处位置是3000 给3000发请求 可以简写url
		axios.get(`/api1/search/users?q=${keyword}`).then(
			response => {
				//将数据保存到数组中
				updateAppState({ isLoading: false, users: response.data.items });
			},
			error => {
				updateAppState({ isLoading: false, err: error.message });
			}
		);
	};

	render() {
		return (
			<div>
				<section className="jumbotron">
					<h3 className="jumbotron-heading">Search Github Users</h3>
					<div>
						<input ref={this.myRef} type="text" name="" id="" placeholder="enter the name you wanna search" />
						<button onClick={this.handleSearch}>搜索</button>
					</div>
				</section>
			</div>
		);
	}
}
