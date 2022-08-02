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
									<Link to={`/home/message/detail/?id=${obj.id}&title=${obj.title}`}>
										{obj.title}
									</Link>

									{/* 传search参数 */}
									{/* <Link
										to={{
											pathname: '/home/message/detail',
											state: { id: obj.id, title: obj.title }
										}}
									>
										{obj.title}
									</Link> */}
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
				</div>
			</div>
		);
	}
}
