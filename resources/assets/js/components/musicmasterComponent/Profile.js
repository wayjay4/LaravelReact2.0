import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        let artist = {
            name: '',
            followers: {
                total: ''
            },
            images: [{
                url: ''
            }],
            genres: []
        };

        if(this.props.artist !== null) {
            artist = this.props.artist;
        }

        return (
            <div className={"profile-container"}>
                <img
                    className={"profile-img"}
                    alt={"Profile"}
                    src={artist.images[0].url}
                />

                <div className={"profile-info"}>
                    <div className={"profile-name"}>{artist.name}</div>

                    <div className={"profile-followers"}>{artist.followers.total} followers</div>

                    <div className={"profile-genres"}>
                        {artist.genres.map((genre, key) => {
                            genre = (genre !== artist.genres[artist.genres.length-1])
                                ? `${genre}, `
                                : `& ${genre}`;
                            return(
                                <span key={key}>{genre}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
