import React, { Component } from 'react';
import Lyric from './Lyric';

class LyricList extends Component {
    constructor(props) {
        super(props)

        this.renderLyrics = this.renderLyrics.bind(this);
    }

    renderLyrics() {
        const { lyrics } = this.props;
        return lyrics.map(lyric => <Lyric key={lyric.id} {...lyric} />)
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        )
    }
}

export default LyricList;