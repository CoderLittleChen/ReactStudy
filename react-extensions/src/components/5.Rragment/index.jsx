import React, { Component, Fragment } from 'react';

export default class Demo extends Component {
	//当有多个子标签 但是却不想用div标签包裹的时候 可以选择Fragment
	render() {
		return (
			//Fragment只能有两个属性key children 不能自定义
			<Fragment key={1} children={2}>
				<h1>h1标题</h1>
				<h2>h2标题</h2>
			</Fragment>

			//空标签也可以实现类似效果 但是不允许加任何属性
			// <>
			// 	<h1>h1标题</h1>
			// 	<h2>h2标题</h2>
			// </>
		);
	}
}
