import React from 'react';
import ReactDOM from 'react-dom/client';

//#region  Class Demo Component
// export default class Demo extends React.Component {
// 	state = {
// 		count: 0
// 	};

// 	handleClick = () => {
// 		this.setState({
// 			count: this.state.count + 1
// 		});
// 	};

// 	componentDidMount() {
// 		this.timer = setInterval(() => {
// 			this.setState({
// 				count: this.state.count + 1
// 			});
// 		}, 1000);
// 	}

// 	unmount = () => {
// 		//ReactDOM.unmountComponentAtNode(document.getElementById('root'));

// 		//卸载组件新写法
// 		var root = ReactDOM.createRoot(document.getElementById('root'));
// 		root.unmount();
// 	};

// 	componentWillUnmount() {
// 		clearInterval(this.timer);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>当前求和为：{this.state.count}</h1>
// 				<button onClick={this.handleClick}>点我+1</button>
// 				<button onClick={this.unmount}>卸载组件</button>
// 			</div>
// 		);
// 	}
// }
//#endregion

//#region Func Demo Component

export default function Demo() {
	//这里的参数可以直接传对象 对应更新的时候也更新对象
	const [count, setCount] = React.useState({ count: 0 });

	//第二个数组中的参数表示只监听count的变化
	React.useEffect(() => {
		let timer = setInterval(() => {
			setCount({ count: count.count + 1 });
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [count]);

	function add() {
		setCount({ count: count.count + 1 });
	}

	function unmount() {
		//原写法
		//ReactDOM.unmountConponentAtNode(document.getElementById('root'));
		var root = ReactDOM.createRoot(document.getElementById('root'));
		root.unmount();
	}

	return (
		<div>
			<h1>当前求和为：{count.count}</h1>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
		</div>
	);
}

//#endregion
