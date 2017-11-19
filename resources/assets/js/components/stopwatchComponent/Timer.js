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
            seconds: 0,
            interval: ''
        }
    }

    componentWillMount() {
        // set the countdown timer
        this.setCountDownTime();
    }

    componentWillUnmount(){
      clearInterval(this.state.interval);
    }

    componentDidMount() {
        this.createInterval();
    }

    createInterval(){
        const every_second = 1000;
        this.state.interval = setInterval(() => this.getCountDownTime(this.state.newTime), every_second);
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
            if(time >= 0) {
                const seconds = Math.floor((time / 1000) % 60);
                const minutes = Math.floor((time / 1000 / 60) % 60);
                const hours = Math.floor(time / (1000 * 60 * 60) % 24);
                const days = Math.floor(time / (1000 * 60 * 60 * 24));

                const newTime = time - 1000;

                this.setState({
                    newTime,
                    days,
                    hours,
                    minutes,
                    seconds
                });
            }
            else{
                alert('all done!');
                clearInterval(this.state.interval);
            }
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
                <div className="timer-days">{this.leading0(this.state.days)} days</div>
                <div className="timer-hours">{this.leading0(this.state.hours)} hours</div>
                <div className="timer-minutes">{this.leading0(this.state.minutes)} mins</div>
                <div className="timer-seconds">{this.leading0(this.state.seconds)} secs</div>

                <br />

                <div>
                    <Button className="timer-btn" bsStyle="success" onClick={() => this.changeStartTimer()}>Start</Button>
                    <Button className="timer-btn" bsStyle="danger" onClick={() => this.changeStopTimer()}>Stop</Button>
                    <Button className="timer-btn" bsStyle="info" onClick={() => this.changeResetTimer()}>Reset</Button>
                </div>
            </div>
        );
    }
}
