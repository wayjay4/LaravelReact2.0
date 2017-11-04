// Layout.js
import React, {Component} from 'react';

import Clock from './components/clockComponent/Clock';

export default class Master extends Component {
    render() {
        return (
            <div className="container">
                <Clock />
            </div>
        );
    }
}
