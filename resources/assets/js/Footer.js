import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return(
            <footer>
                <div className={"app-footer text-center"}>
                    <p>
                        Copyright &copy; <a href={"http://waylondixon.com"}>waylondixon.com</a>
                    </p>
                </div>
            </footer>
        );
    }
}
