import React, { Component } from 'react';

export default class Gallery extends Component {
    render() {
        console.log('this.props.gallery', this.props);

        return(
            <div>Gallery</div>
        );
    }
}