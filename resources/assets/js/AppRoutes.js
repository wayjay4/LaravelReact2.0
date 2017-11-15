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
                <Route exact path={'/projects'} component={Home} />
                <Route path={'/projects/home'} component={Home} />
                <Route path={'/projects/cdclock'} component={Cdclock} />
                <Route path={'/projects/goalcoach'} component={GoalCoach} />
                <Route path={'/projects/musicmaster'} component={MusicMaster} />
                <Route path={'/projects/reminderpro'} component={ReminderPro} />
                <Route path={'/projects/stopwatch'} component={Stopwatch} />
            </Switch>
        );
    }
}
