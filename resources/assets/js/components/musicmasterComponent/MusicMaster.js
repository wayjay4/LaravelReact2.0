import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

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

        // setting up header with access token Spotify API access using 'GET' method
        let accessToken =
            'BQCBHLTzd0TID0KH8k02kQVCKY7CJH-0MVuCZrDcVk51SEv4wysAta-qfcmxQXlm1fqb3RQZ6B3OnQeJqbNPBUqrqH9J1BESSY-peHYLBg6hICnANK8PWMk_6w0o9Uy1--PoONjWhhAbXvoUABv7DjAgOTDUhnA08ufZ-ZEYvM4t-OMQ_PM';
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

                <Profile
                    artist={this.state.artist}
                />

                <div className={"Gallery"}>
                    Gallery
                </div>
            </div>
        );
    }
}
