// Layout.js
import React, {Component} from 'react';

import Clock from './components/clockComponent/Clock';
import Stopwatch from './components/stopwatchComponent/Stopwatch';

export default class Master extends Component {
    render() {
        return (
            <div className="container">
                <Stopwatch />
            </div>
        );
    }
}
