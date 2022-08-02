import React, { Component } from 'react';
//注意这里不是querystring  新版本改成qs
//其次这里用qs来解析字符串
import qs from 'qs';

export default class Detail extends Component {
	//定义state  保存content数组
	state = {
		contentArr: [
			{ id: 1, content: 'content1' },
			{ id: 2, content: 'content2' },
			{ id: 3, content: 'content3' }
		]
	};

	render() {
		// console.log(this.props);
		const { contentArr } = this.state;

		//传递params参数
		// const { id, title } = this.props.match.params;

		//传递search参数
		//这里的slice(begin,end) 索引从0开始 包含ben'gin不包含end
		const { id, title } = qs.parse(this.props.location.search.slice(1));

		//传递state参数
		// const { id, title } = this.props.location.state || {};

		const result =
			contentArr.find(obj => {
				return Number(obj.id) === Number(id);
			}) || {};

		return (
			<div>
				<ul>
					<li>id:{id}</li>
					<li>title:{title}</li>
					<li>content:{result.content}</li>
				</ul>
			</div>
		);
	}
}
