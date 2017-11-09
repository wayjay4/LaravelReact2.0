import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddGoal from './AddGoal';
import GoalList from './GoalList'

class GoalCoach extends Component {
    render() {
        return(
            <div style={{margin: '5px'}}>
                <h3>Goals</h3>

                <AddGoal />

                <GoalList />
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state', state);

    return {};
}

export default connect(mapStateToProps, null)(GoalCoach);
