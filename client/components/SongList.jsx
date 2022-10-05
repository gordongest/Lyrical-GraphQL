import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import Song from './Song';
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../queries/deleteSong";

const SongList = ({ data }) => {
    const renderSongs = () => data.songs.map(song =>
            <Song key={song.id} {...song}/>
    )

    return (
        <div>
            {data.loading ?
                <div>Loading...</div>
                :
                <div>
                    <ul className="collection">
                        {renderSongs()}
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
}

export default graphql(fetchSongs)(SongList);