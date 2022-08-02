//这里的{Component}并不是解构赋值 是由于React中采取了多级暴露 不单单是一个默认暴露
import React, { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

//创建类式组件
class App extends Component {
	render() {
		return (
			<div>
				<Hello />
				<Welcome />
			</div>
		)
	}
}

//暴露App组件
export default App
