import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Test from './pages/Test';
import Header from './components/Header';
import MyNavLink from './components/MyMavLink';
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

							{/* <NavLink
								activeClassName="customizeStyle"
								className="list-group-item"
								to="/about"
								children="Test1"
							/>
							<NavLink
								activeClassName="customizeStyle"
								className="list-group-item"
								to="/home"
								children="Test2"
							/> */}

							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body bg-info">
								{/* 注册路由 */}
								<Switch>
									<Route path="/about" component={About}></Route>
									<Route path="/home" component={Home}></Route>
									<Route path="/home" component={Test}></Route>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
