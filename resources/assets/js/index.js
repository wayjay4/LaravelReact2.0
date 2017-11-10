/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reducer from './reducers';

import App from './App';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router path={"/"}>
            <div>
                <Switch>
                    <Route exact path={"/"} component={App} />
                    <Route path={"/app"} component={App} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
