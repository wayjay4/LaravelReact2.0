import React, { Component } from 'react';

export default class AppFooter extends Component {
    render(){
        return(
            <div id={"app-footer"}>
                <footer>
                        <p>
                            Copyright &copy; <a href={"http://waylondixon.com"}>waylondixon.com</a>
                        </p>
                </footer>
            </div>
        );
    }
}
