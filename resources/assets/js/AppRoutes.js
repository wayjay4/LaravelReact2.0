import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/homeComponent/Home';
import Cdclock from './components/cdclockComponent/Cdclock';
import Stopwatch from './components/stopwatchComponent/Stopwatch';
import MusicMaster from './components/musicmasterComponent/MusicMaster';
import ReminderPro from './components/reminderproComponent/ReminderPro';
import GoalCoach from './components/goalcoachComponent/GoalCoach';

export default class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/home'} component={Home} />
                <Route path={'/cdclock'} component={Cdclock} />
                <Route path={'/goalcoach'} component={GoalCoach} />
                <Route path={'/musicmaster'} component={MusicMaster} />
                <Route path={'/reminderpro'} component={ReminderPro} />
                <Route path={'/stopwatch'} component={Stopwatch} />
            </Switch>
        );
    }
}
