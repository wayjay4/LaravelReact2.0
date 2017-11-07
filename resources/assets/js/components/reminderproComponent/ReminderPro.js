import React, { Component } from 'react';

export default class ReminderPro extends Component {
    render() {
        return(
            <div className={"ReminderPro"}>
                <div className={"title"}>
                    Reminder Pro
                </div>

                <div className={"form-inline"}>
                    <div className={"form-group"}>
                        <input
                            className={"form-control"}
                            placeholder={"I have too..."}
                        />
                    </div>

                    <button
                        type={"button"}
                        className={"btn btn-success"}
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        );
    }
}