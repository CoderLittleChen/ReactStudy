import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
	//定义state
	state = {
		messageArr: [
			{ id: 1, title: 'message1' },
			{ id: 2, title: 'message2' },
			{ id: 3, title: 'message3' }
		]
	};

	go = () => {
		//2 前进2步 -2 后退两步
		this.props.history.go(2);
	};

	goBack = () => {
		this.props.history.goBack();
	};

	goForward = () => {
		this.props.history.goForward();
	};

	pushShow = (id, title) => {
		return () => {
			//push跳转+params参数
			// this.props.history.push(`/home/message/detail/${id}/${title}`);

			//push跳转+search参数
			// this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

			//push跳转+state参数
			this.props.history.push(`/home/message/detail`, { id, title });
		};
	};

	replaceShow = (id, title) => {
		return () => {
			//replace跳转+params参数
			// this.props.history.replace(`/home/message/detail/${id}/${title}`);

			//replace跳转+search参数
			// this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

			//replace跳转+state参数
			this.props.history.replace(`/home/message/detail`, { id, title });
		};
	};

	render() {
		const { messageArr } = this.state;
		return (
			<div>
				<div>
					<ul>
						{messageArr.map(obj => {
							return (
								<li key={obj.id}>
									{/* 传params参数 */}
									{/* <Link to={`/home/message/detail/${obj.id}/${obj.title}`}>{obj.title}</Link> */}
									{/* 传search参数 */}
									{/* <Link to={`/home/message/detail/?id=${obj.id}&title=${obj.title}`}>
										{obj.title}
									</Link> */}
									{/* 传state参数 */}
									<Link
										to={{
											pathname: '/home/message/detail',
											state: { id: obj.id, title: obj.title }
										}}
									>
										{obj.title}
									</Link>
									&nbsp;&nbsp;
									<button className="btn btn-info" onClick={this.pushShow(`${obj.id}`, `${obj.title}`)}>
										push查看
									</button>
									&nbsp;&nbsp;
									<button className="btn btn-info" onClick={this.replaceShow(`${obj.id}`, `${obj.title}`)}>
										replace查看
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<br />
				<div>
					{/* 传递params参数 */}
					{/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

					{/* 传递search参数 直接接收即可 */}
					<Route path="/home/message/detail" component={Detail} />

					{/* 传递state参数 直接接收即可 */}
					{/* <Route path="/home/message/detail" component={Detail} /> */}

					<button onClick={this.goBack}>后退</button>
					<button onClick={this.goForward}>前进</button>
					<button onClick={this.go}>Go</button>
				</div>
			</div>
		);
	}
}
