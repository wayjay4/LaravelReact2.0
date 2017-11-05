import React, { Component } from 'react';
import { Form, FormControl, Button } from  'react-bootstrap';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTime: 0,
            stopTimer: 1,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        // set the countdown timer
        this.setCountDownTime();
    }
    componentDidMount() {
        const milliseconds = 1000;
        setInterval(() => this.getCountDownTime(this.state.newTime), milliseconds);
    }

    leading0(num) {
        return (num < 10 ) ? '0' + num : num;
    }

    setCountDownTime() {
        // convert time from seconds to milleseconds
        const newTime = this.props.startTime * 1000;
        // calculate state vars
        const seconds = Math.floor((newTime/1000) % 60);
        const minutes = Math.floor((newTime/1000/60) % 60);
        const hours = Math.floor(newTime/(1000*60*60) % 24);
        const days = Math.floor(newTime/(1000*60*60*24));

        // set state vars
        this.setState({
            newTime,
            days,
            hours,
            minutes,
            seconds
        });
    }

    getCountDownTime(time) {
        // if the timer is running, then calculate and set a new time
        if(this.state.stopTimer == 0) {
            const seconds = Math.floor((time/1000) % 60);
            const minutes = Math.floor((time/1000/60) % 60);
            const hours = Math.floor(time/(1000*60*60) % 24);
            const days = Math.floor(time/(1000*60*60*24));

            const newTime = time-1000;

            this.setState({
                newTime,
                days,
                hours,
                minutes,
                seconds
            });
        }
    }

    changeStopTimer() {
        this.setState({
            stopTimer: 1
        });
    }

    changeStartTimer() {
        this.setState({
            stopTimer: 0
        });
    }

    changeResetTimer() {
        this.setCountDownTime(this.props.startTime);
    }

    render() {
        return (
            <div>
                <div className="Clock-days">{this.leading0(this.state.days)} days</div>
                <div className="Clock-hours">{this.leading0(this.state.hours)}:</div>
                <div className="Clock-minutes">{this.leading0(this.state.minutes)}:</div>
                <div className="Clock-seconds">{this.leading0(this.state.seconds)}</div>

                <br />

                <div>
                    <Button className="Timer-btn" bsStyle="success" onClick={() => this.changeStartTimer()}>Start</Button>
                    <Button className="Timer-btn" bsStyle="danger" onClick={() => this.changeStopTimer()}>Stop</Button>
                    <Button className="Timer-btn" bsStyle="info" onClick={() => this.changeResetTimer()}>Reset</Button>
                </div>
            </div>
        );
    }
}
