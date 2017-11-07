import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addReminder, deleteReminder } from '../../actions/index';

class ReminderPro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;

        return (
            <ul className={"list-group col-sm-4"}>
                {
                    reminders.map(reminder => {
                        return(
                            <li
                                className={"list-group-item"}
                                key={reminder.id}
                            >
                                <div className={"list-item"}>
                                    {reminder.text}
                                </div>
                                <div
                                    className={"list-item delete-button"}
                                    onClick={() => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

    render() {
        return(
            <div className={"ReminderPro"}>
                <div className={"title"}>
                    Reminder Pro
                </div>

                <div className={"form-inline reminder-form"}>
                    <div className={"form-group"}>
                        <input
                            className={"form-control"}
                            placeholder={"I have too..."}
                            onChange={(event) => this.setState({text: event.target.value})}
                            onKeyPress={(event) => {
                                if(event.key === 'Enter') {
                                    this.addReminder();
                                }
                            }}
                        />

                        <input
                            className={"form-control"}
                            type={"datetime-local"}
                            onChange={(event) => this.setState({dueDate: event.target.value})}
                        />
                    </div>

                    <button
                        type={"button"}
                        className={"btn btn-success"}
                        onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                </div>

                { this.renderReminders() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(ReminderPro)
