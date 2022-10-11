import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import LyricCreator from './LyricCreator';
import LyricList from './LyricList';
import fetchSingleSong from '../queries/fetchSingleSong';

const SongDetail = ({ data: { song } }) => (
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

export default graphql(
    fetchSingleSong, {
        options: props => ({ variables: { id : props.params.id } })
    })(SongDetail);