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
                <div className="master-body">
                    <div className={"master-header"}>
                        <AppNavigation />
                    </div>

                    <hr />

                    <div className={"master-content"}>
                        <AppRoutes />
                    </div>

                    <hr />

                    <div className={"master-footer"}>
                        <AppFooter />
                    </div>
                </div>
            </Router>
        );
    }
}
