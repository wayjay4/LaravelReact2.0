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
                <div id={"appmaster-container"}>
                    <div id={"appmaster-header"}>
                        <AppNavigation />
                    </div>

                    <div id={"appmaster-body"}>
                        <div id={"appmaster-content"}>
                            <AppRoutes />
                        </div>
                    </div>

                    <div id={"appmaster-footer"}>
                        <AppFooter />
                    </div>
                </div>
            </Router>
        );
    }
}
