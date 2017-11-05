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
        // create fetch url
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query
            + '&type=artist&limit=1';

        console.log('FETCH_URL', FETCH_URL);

        // setting up header with access token Spotify API access using 'GET' method
        let accessToken =
            'BQBtc9GMgg-DIusbKX3fo7NAMOmQNZvpmAE2DQDotw1fkvkO43JDCV6n70jhnivGtFTSoD6Pf3cetsxz1tqnwPdHLVSyFCXIIg9nihy--TVuSuCBo8NKj1iDdk5Hr5kVWQEXKi0oDprMJOcTL-S_ypjfmQsUrPc756zxcpUGRrV1CmR5caE';
        let options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        // send the request and get the response
        fetch(FETCH_URL, options)
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                this.setState({ artist });

                console.log('this.state', this.state);
            });
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
