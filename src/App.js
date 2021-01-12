import React, { Component } from 'react';
import LandingPage from './views/landing';
import AppLayout from './app.layout';
import Login from './views/Login';
import { Route, Switch} from "react-router-dom";
import {ProtectedRoute} from './protected.route';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ProtectedRoute exact path='/' component={LandingPage}/>
				<ProtectedRoute exact path='/app' component={AppLayout}/>
				<ProtectedRoute exact path='/login' component={Login}/>
				
				

			</div>
		);
	}
}

export default App;
