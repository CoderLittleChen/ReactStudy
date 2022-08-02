import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html中通过a标签来跳转不同的页面  */}
							{/* <a className="list-group-item" href="./about.html">
								About
							</a>
							<a className="list-group-item active" href="./home.html">
								Home
							</a> */}

							<NavLink activeClassName="customizeStyle" className="list-group-item" to="/about">
								About
							</NavLink>
							<NavLink activeClassName="customizeStyle" className="list-group-item" to="/home">
								Home
							</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body bg-info">
								{/* 注册路由 */}
								<Route path="/about" component={About}></Route>
								<Route path="/home" component={Home}></Route>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
