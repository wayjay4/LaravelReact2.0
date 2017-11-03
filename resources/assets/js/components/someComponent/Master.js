// Layout.js
import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Master extends Component {render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">Example Component</div>

                        <div className="panel-body">
                            I am an Example component using ReactJS!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
