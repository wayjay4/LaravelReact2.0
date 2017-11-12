// Layout.js
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppNavigation from './AppNavigation';
import AppRoutes from './AppRoutes';
import AppFooter from './AppFooter';

export default class AppMaster extends Component {
    render() {
        return (
            <Router path={'/'}>
                <div id="master-container">
                    <div id={"master-header"}>
                        <AppNavigation />
                    </div>

                    <div id={"master-body"}>
                        <div id={"master-content"}>
                            <AppRoutes />
                        </div>
                    </div>

                    <div id={"master-footer"}>
                        <AppFooter />
                    </div>
                </div>
            </Router>
        );
    }
}
