import React, { Component } from 'react';
import { connect } from 'react-redux';

import { firebaseApp} from '../../firebase';
import { logUser } from '../../actions/';

import AddGoal from './AddGoal';
import GoalList from './GoalList'
import CompletedGoalList from './CompletedGoalList';
import Signin from './Signin';
import Signup from './Signup';

class GoalCoach extends Component {
    constructor(props){
        super(props);

        this.state = {
            logged_in: false,
            new_user: false
        };
    }

    toggleSignIn(){
        if(this.state.new_user === true)
            this.setState({new_user: false});
        else
            this.setState({new_user: true});
    }

    signOut(){
        firebaseApp.auth().signOut();

        this.setState({logged_in: false});
    }

    componentDidMount(){
        this.authUser();
    }

    authUser(){
        firebaseApp.auth().onAuthStateChanged((user) => {
            if(user) {
                //console.log('user has signed in or up', user);

                const { email } = user;
                this.props.logUser(email);

                this.setState({logged_in: true});
            }
            else {
                //console.log('user has signed out or still needs to sign in.', user);

                this.setState({logged_in: false});
            }
        });
    }

    render(){
        const { email } = this.props.user;
        const { logged_in } = this.state;

        if(!(logged_in === true)){
            //console.log('user is NOT valid: log this user out now. logged_in:', logged_in, ', email: ', email);
            if(this.state.new_user === false) {
                return (
                    <div style={{margin: '5px'}}>
                        <Signin/>

                        <a className={"btn"} onClick={() => this.toggleSignIn()}>
                            Sign up instead.
                        </a>
                    </div>
                );
            } else{
                return (
                    <div style={{margin: '5px'}}>
                        <Signup/>

                        <a className={"btn"} onClick={() => this.toggleSignIn()}>
                            Already a user? Sign in instead.
                        </a>
                    </div>
                );
            }
        } else{
            //console.log('user is valid: log this user in now. logged_in:', logged_in, ', email: ', email);

            // continue with code below
        }

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

                <button
                    className={"btn btn-danger"}
                    onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('state', state);

    const { user } = state;

    return {
        user
    };
}

export default connect(mapStateToProps, { logUser })(GoalCoach);
