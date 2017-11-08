import React, { Component } from 'react';

import Signin from './Signin';
import Signup from './Signup';

export default class GoalCoach extends Component {
    render() {
        return(
            <div>
                <div>GoalCoach App</div>
                <Signin />
                <Signup />
            </div>
        );
    }
}