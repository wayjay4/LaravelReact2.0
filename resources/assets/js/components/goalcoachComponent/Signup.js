import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { firebaseApp } from '../../firebase';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }

    signUp() {
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                this.setState({error})
            });
    }

    render() {
        return(
            <div className={"form-inline"}>
                <h2>Sign Up</h2>

                <div className={"form-group"}>
                    <input
                        className={"form-control"}
                        type={"text"}
                        style={{marginRight: '5px'}}
                        placeholder={"email"}
                        onChange={(event) => this.setState({email: event.target.value})}
                    />

                    <input
                        className={"form-control"}
                        type={"password"}
                        style={{marginRight: '5px'}}
                        placeholder={"password"}
                        onChange={(event) => this.setState({password: event.target.value})}
                    />

                    <Link to={'/app'}>
                        <button
                            className={"btn btn-primary"}
                            type={"button"}
                            onClick={() => this.signUp()}
                        >
                            Sign Up
                        </button>
                    </Link>
                </div>

                <div>
                    {this.state.error.message}
                </div>
            </div>
        );
    }
}
