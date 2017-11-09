import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddGoal from './AddGoal';
import GoalList from './GoalList'
import CompletedGoalList from './CompletedGoalList';

class GoalCoach extends Component {
    render() {
        return(
            <div style={{margin: '5px'}}>
                <h3>Goal Coach</h3>

                <AddGoal />
                <hr />

                <h4>Goals</h4>

                <GoalList />
                <hr />

                <h4>Completed Goal List</h4>

                <CompletedGoalList />
                <hr />
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state', state);

    return {};
}

export default connect(mapStateToProps, null)(GoalCoach);
