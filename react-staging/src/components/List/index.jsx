import React, { Component } from 'react';

export default class List extends Component {
	render() {
		const { users, isFirst, isLoading, err } = this.props;
		return (
			<div>
				<div className="row">
					{isFirst ? (
						<h2>输入关键字,点击搜索</h2>
					) : isLoading ? (
						<h2>Loading...</h2>
					) : err ? (
						<h2>{err}</h2>
					) : (
						users.map(userObj => {
							return (
								<div key={userObj.id} className="card">
									<a href={userObj.html_url} target="_blank" rel="noreferrer">
										<img src={userObj.avatar_url} alt="" style={{ width: '100px' }} />
									</a>
									<p className="card-text">{userObj.login}</p>
								</div>
							);
						})
					)}
				</div>
			</div>
		);
	}
}
