import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeGoalRef } from "../../firebase";
import { setCompleted } from "../../actions";

class CompletedGoalList extends Component {
    componentDidMount() {
        completeGoalRef.on('value', (snap) => {
           let completeGoals = [];

           snap.forEach((completeGoal) => {
               const { email, title } = completeGoal.val();

               completeGoals.push({email, title});
           });

            this.props.setCompleted(completeGoals);
        });
    }

    clearCompleted() {
        completeGoalRef.set([]);
    }

    render() {
        return(
            <div>
                {
                    this.props.completeGoals.map((completeGoal, key) => {
                        const { title, email } = completeGoal;

                        return(
                            <div
                                key={key}
                            >
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        );
                    })
                }

                <button
                    className={"btn btn-primary"}
                    onClick={() => this.clearCompleted()}
                >
                    Clear All
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { completeGoals } = state;

    return {
        completeGoals
    }
}

export default connect(mapStateToProps, { setCompleted })(CompletedGoalList);
