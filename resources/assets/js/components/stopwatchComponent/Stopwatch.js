// Layout.js
import React, {Component} from 'react';
import { Form, FormControl, Button } from  'react-bootstrap';

import Timer from './Timer';

export default class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: (60*1000)*60,
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
            <div className="container, App">
                <div className="App-title">Countdown from {this.state.startTime} milli seconds</div>

                <Timer
                    startTime={this.state.startTime}
                />

                <Form inline={true}>
                    <FormControl
                        className="Deadline-input"
                        placeholder='new start time in seconds'
                        onChange={event => this.setState({newStartTime: event.target.value})}
                    />

                    <Button onClick={() => this.changeStartTime()}>Submit</Button>
                </Form>
            </div>
        );
    }
}
