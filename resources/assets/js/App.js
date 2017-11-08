// Layout.js
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from "./firebase";

import Cdclock from './components/cdclockComponent/Cdclock';
import Stopwatch from './components/stopwatchComponent/Stopwatch';
import MusicMaster from './components/musicmasterComponent/MusicMaster';
import ReminderPro from './components/reminderproComponent/ReminderPro';
import GoalCoach from './components/goalcoachComponent/GoalCoach'

class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
    }

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

function mapStateToProps(state) {
    console.log('state', state);

    return {};
}

export default connect(mapStateToProps, null)(App);
