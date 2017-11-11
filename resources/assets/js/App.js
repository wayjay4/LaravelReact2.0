// Layout.js
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';
import AppRoutes from './AppRoutes';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <Router path={'/'}>
                <div className="app-main">
                    <Navigation />

                    <hr />

                    <div className={"app-body"}>
                        <AppRoutes />
                    </div>

                    <hr />

                    <Footer />
                </div>
            </Router>
        );
    }
}
