// Layout.js
import React, {Component} from 'react';
import { Form, FormControl, Button } from  'react-bootstrap';

import Timer from './Timer';

export default class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline
        });
    }

    render() {
        return (
            <div className="container, App">
                <div className="App-title">Countdown to {this.state.deadline}</div>

                <Timer
                    deadline={this.state.deadline}
                />

                <Form inline={true}>
                    <FormControl
                        className="Deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />

                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                    <br />
                    <Button>Stop</Button>
                    <Button>Start</Button>
                    <Button>Reset</Button>
                </Form>
            </div>
        );
    }
}
