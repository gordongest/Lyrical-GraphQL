import React from 'react';
import { Link } from 'react-router';
import { graphql, compose } from 'react-apollo';
import Song from './Song';
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../queries/deleteSong";

// de-structure nested data
const SongList = ({ data: { loading, songs } }) => (
    <div>
        {loading ?
            <div>Loading...</div>
            :
            <div>
                <ul className="collection">
                    {songs.map(song =>
                        <Song key={song.id} {...song}/>
                    )}
                </ul>
                <Link
                    to="/songs/create"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        }
    </div>
)

export default compose(graphql(fetchSongs), graphql(deleteSong))(SongList);