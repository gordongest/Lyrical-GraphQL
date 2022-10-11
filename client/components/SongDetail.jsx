import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import LyricCreator from './LyricCreator';
import LyricList from './LyricList';
import fetchSingleSong from '../queries/fetchSingleSong';

class SongDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { song } = this.props.data;
        // console.log(song)
        return (
            <div className="container">
                <Link to="/">Back</Link>
                {song &&
                    <div>
                        <h3>
                            {song.title}
                        </h3>
                        <LyricList lyrics={song.lyrics} />
                        <LyricCreator songId={song.id} />
                    </div>
                }
            </div>
        )
    }
}

export default graphql(
    fetchSingleSong, {
        options: props => ({ variables: { id : props.params.id } })
    })(SongDetail);