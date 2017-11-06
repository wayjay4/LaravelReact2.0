import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

export default class MusicMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null,
            tracks: []
        };
    }

    search() {
        // create fetch url
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = BASE_URL + 'q=' + this.state.query
            + '&type=artist&limit=1';
        const ALBUM_URL = 'https://api.spotify.com/v1/artists';

        // setting up header with access token Spotify API access using 'GET' method
        let accessToken =
            'BQAaX9OVvZn9Risf_Vt2jBj0GLgnyYYNAof4Sx5fra5iDBb4kucVaj3BzGDtwcChKHQPh3npna5ak2QA3tqpApMsD9O7PSZGsh53YqRA9VkSqOUwYRKb3D88ZsapBGQJmYJ38uE6LweR0eOTR7tYT-zoVsxBBcFxhY1UYVKHafOZVst9AHg';
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

                FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=US`;
                fetch(FETCH_URL, options)
                    .then(response => response.json())
                    .then(json => {
                        console.log('artist\'s top tracks:', json);
                        const { tracks } = json;
                        this.setState({ tracks })
                    });

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

                {
                    (this.state.artist !== null) ?
                        <div>
                            <Profile
                                artist={this.state.artist}
                            />

                            <Gallery
                                tracks={this.state.tracks}
                            />
                        </div>
                        :
                        <div></div>
                }
            </div>
        );
    }
}
