import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddGoal from './AddGoal';

class GoalCoach extends Component {
    render() {
        return(
            <div>
                <h3>Goals</h3>

                <AddGoal />

                <div>Goal List</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);

    return {};
}

export default connect(mapStateToProps, null)(GoalCoach);
