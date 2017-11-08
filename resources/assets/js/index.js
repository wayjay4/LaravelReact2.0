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
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from "./firebase";

import GoalCoach from './components/goalcoachComponent/GoalCoach';
import Signin from './components/goalcoachComponent/Signin';
import Signup from './components/goalcoachComponent/Signup';

firebaseApp.auth().onAuthStateChanged((user) => {
   if(user) {
       console.log('user has signed in or up', user);
   }
   else {
       console.log('user has signed out or still needs to sign in.');
   }
});

ReactDOM.render(
    <Router path={"/"} history={browserHistory}>
        <Route path={"/goalcoach"} component={GoalCoach} />
        <Route path={"/signin"} component={Signin} />
        <Route path={"/signup"} component={Signup} />
    </Router>,
    document.getElementById('root')
);