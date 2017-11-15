// Layout.js
import React, {Component} from 'react';
import { Form, FormControl, Button } from  'react-bootstrap';
import '../../../sass/cdclock.css';

import Timer from './Timer';

export default class Cdclock extends Component {
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
            <div className="cdclock-container">
                <div className="cdclock-title">
                    Countdown to {this.state.deadline}
                    </div>

                <Timer
                    deadline={this.state.deadline}
                />

                <Form inline={true}>
                    <FormControl
                        className="cdclock-deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />

                     <Button
                         className={"cdclock-btn"}
                         onClick={() => this.changeDeadline()}
                     >
                         Submit
                     </Button>
                </Form>
            </div>
        );
    }
}
