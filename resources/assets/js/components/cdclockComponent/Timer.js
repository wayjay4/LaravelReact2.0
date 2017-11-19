import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            interval: ''
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        const every_second = 1000;
        this.state.interval = setInterval(() => this.getTimeUntil(this.props.deadline), every_second);
    }

    componentWillUnmount() {
      clearInterval(this.state.interval);
    }

    leading0(num) {
        return (num < 10 ) ? '0' + num : num;
    }

    getTimeUntil(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());

      if(time >= 0){
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({
            days,
            hours,
            minutes,
            seconds: seconds
        });
      }
      else {
        console.log('Congratulations! You made it! Countdown is done.');
        alert('Congratulations! You made it! Countdown is done.');
        clearInterval(this.state.interval);
      }
    }

    render() {
        return (
            <div>
                <div className="timer-days">{this.leading0(this.state.days)} days</div>
                <div className="timer-hours">{this.leading0(this.state.hours)} hours</div>
                <div className="timer-minutes">{this.leading0(this.state.minutes)} minutes</div>
                <div className="timer-seconds">{this.leading0(this.state.seconds)} seconds</div>
            </div>
        );
    }
}
