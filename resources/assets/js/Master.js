// Layout.js
import React, {Component} from 'react';

import Cdclock from './components/cdclockComponent/Cdclock';
import Stopwatch from './components/stopwatchComponent/Stopwatch';
import MusicMaster from './components/musicmasterComponent/MusicMaster';
import ReminderPro from './components/reminderproComponent/ReminderPro';
import GoalCoach from './components/goalcoachComponent/GoalCoach'

export default class Master extends Component {
    render() {
        return (
            <div className="container">
                {/*
                <Cdclock />
                <hr />
                <Stopwatch />
                <hr />
                <MusicMaster />
                <hr />
                <ReminderPro />
                <hr />
                */}
                <GoalCoach />
            </div>
        );
    }
}
