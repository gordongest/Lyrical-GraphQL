import React from 'react';
import { Link } from 'react-router';
import { graphql, compose } from 'react-apollo';
import Song from './Song';
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../queries/deleteSong";

const SongList = ({ data, mutate, refetch }) => {
    const renderSongs = () => data.songs.map(song =>
            <Song key={song.id} {...song}/>
    )

    const handleDelete = id => {
        mutate({
            variables: { id }
        })
            .then(() => refetch())
            .catch(err => console.warn("ERR:", err.message));
    }

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

export default compose(graphql(fetchSongs), graphql(deleteSong))(SongList);