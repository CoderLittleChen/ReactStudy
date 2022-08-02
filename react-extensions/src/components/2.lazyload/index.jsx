import React, { Component, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import About from './About';
// import Home from './Home';

const Home = lazy(() => {
	return import('./Home');
});

const About = lazy(() => {
	return import('./About');
});

export default class Demo extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<h1>React Route Demo</h1>
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

							<NavLink className="list-group-item" to="/about">
								About
							</NavLink>
							<NavLink className="list-group-item" to="/home">
								Home
							</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body bg-info">
								{/* 注册路由 */}
								<React.Suspense fallback={<h1>Loading....</h1>}>
									<Route path="/about" component={About}></Route>
									<Route path="/home" component={Home}></Route>
								</React.Suspense>
								{/* <Route path="/about" component={About}></Route>
								<Route path="/home" component={Home}></Route> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
