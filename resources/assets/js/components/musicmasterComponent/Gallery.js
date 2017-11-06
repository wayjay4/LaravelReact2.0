import React, { Component } from 'react';

export default class Gallery extends Component {
    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        audio.play();
    }

    render() {
        const { tracks } = this.props;

        return(
            <div>
                {tracks.map((track, key) => {
                    console.log('track', track);
                    const trackImg = track.album.images[0].url;

                    return (
                        <div
                            className={"track"}
                            key={key}
                            onClick={() => this.playAudio(track.preview_url)}
                        >
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