// Layout.js
import React, {Component} from 'react';
import { firebaseApp } from "./firebase";

import Navigation from './Navigation';
import Cdclock from './components/cdclockComponent/Cdclock';
import Stopwatch from './components/stopwatchComponent/Stopwatch';
import MusicMaster from './components/musicmasterComponent/MusicMaster';
import ReminderPro from './components/reminderproComponent/ReminderPro';
import GoalCoach from './components/goalcoachComponent/GoalCoach'

export default class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div className="container">
                <Navigation />

                <hr />

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

                <button
                    className={"btn btn-danger"}
                    onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        );
    }
}
