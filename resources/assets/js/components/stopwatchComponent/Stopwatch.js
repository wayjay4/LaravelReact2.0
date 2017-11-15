// Layout.js
import React, {Component} from 'react';
import { Form, FormControl, Button } from  'react-bootstrap';
import '../../../sass/stopwatch.css';

import Timer from './Timer';

export default class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: 60*60,
            newStartTime: ''
        }
    }

    changeStartTime() {
        this.setState({
            startTime: this.state.newStartTime
        });
    }

    render() {
        return (
            <div className="stopwatch-container">
                <div className="stopwatch-title">Countdown from {this.state.startTime} seconds</div>

                <Timer
                    startTime={this.state.startTime}
                />

                <Form inline={true}>
                    <FormControl
                        className="stopwatch-deadline-input"
                        placeholder='new start time in seconds'
                        onChange={event => this.setState({newStartTime: event.target.value})}
                    />

                    <Button
                        className={"stopwatch-btn"}
                        onClick={() => this.changeStartTime()}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
