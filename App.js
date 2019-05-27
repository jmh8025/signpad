import React, {Component} from 'react';
import Login from "./components/logins/Login";

import {Provider} from 'react-redux';
import store from './store/store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Login/>
			</Provider>
		);
	}
}

