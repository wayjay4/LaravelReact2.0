import React, { Component } from 'react';

export default class Gallery extends Component {
    render() {
        console.log('this.props.gallery', this.props);
        const { tracks } = this.props;

        return(
            <div>
                {tracks.map((track, key) => {
                    const trackImg = track.album.images[0].url;

                    return (
                        <div className={"track"} key={key}>
                            <img
                                className={"track-img"}
                                alt={"track"}
                                src={trackImg}
                            />

                            <p className={"track-text"}>
                                {track.name}
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    }
}