import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Song from './Song';

const query = gql`
    {
        songs {
            title
            id
        }
    }
`

const SongList = ({ data }) => {
    const renderSongs = () => data.songs.map(song => <Song key={song.id} {...song}/>)


    return (
        <div>
            {data.loading ?
                <div>Loading...</div>
                :
                <div>
                    <ul className="collection">
                        {renderSongs()}
                    </ul>
                </div>
            }
        </div>
    )
}

export default graphql(query)(SongList);