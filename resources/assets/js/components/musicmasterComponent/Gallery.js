import React, { Component } from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);

        if(!this.state.playing) {
            audio.play();
            this.setState({
                playingUrl: previewUrl,
                audio,
                playing: true
            });
        }
        else{
            if(this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                });
            }
            else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playingUrl: previewUrl,
                    audio,
                    playing: true
                });
            }
        }
    }

    render() {
        const { tracks } = this.props;

        return(
            <div>
                {tracks.map((track, key) => {
                    const trackImg = track.album.images[0].url;

                    return (
                            <div
                                className={"gallery-track"}
                                key={key}
                                onClick={() => this.playAudio(track.preview_url)}
                            >
                                <img
                                    className={"gallery-track-img"}
                                    alt={"track"}
                                    src={trackImg}
                                />

                                <div className={"gallery-track-play"}>
                                    <div className={"gallery-track-play-inner"}>
                                        {
                                            (this.state.playingUrl === track.preview_url)
                                                ? <span>| |</span>
                                                : <span>&#9654;</span>
                                        }
                                    </div>
                                </div>

                                <p className={"gallery-track-text"}>
                                    {track.name}
                                </p>
                            </div>
                    )
                })}
            </div>
        );
    }
}