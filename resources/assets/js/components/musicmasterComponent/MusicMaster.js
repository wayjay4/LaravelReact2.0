import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

export default class MusicMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null
        };
    }

    search() {
        console.log('this.state', this.state);
    }

    render() {
        return (
            <div className={"App"}>
                <div className={"App-title"}>Music Master</div>

                <div>
                    <FormGroup>
                        <InputGroup>
                            <FormControl
                                type={"text"}
                                placeholder={"Search for an Artist"}
                                value={this.state.query}
                                onChange={event => {this.setState({query: event.target.value})}}
                                onKeyPress={event => {
                                    if(event.key === 'Enter') {
                                        this.search();
                                    }
                                }}
                            />

                            <InputGroup.Addon onClick={() => this.search()}>
                                <Glyphicon glyph={"search"} />
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </div>

                <div className={"Profile"}>
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>

                <div className={"Gallery"}>
                    Gallery
                </div>
            </div>
        );
    }
}
