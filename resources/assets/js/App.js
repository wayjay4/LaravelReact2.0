// Layout.js
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import AppRoutes from './AppRoutes';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Router path={"/"}>
                    <div>
                        <Navigation />
                        
                        <hr />

                        <AppRoutes />
                    </div>
                </Router>
            </div>
        );
    }
}
