import React from 'react';
import Song from './Song';

const SongList = ({ songs }) => {
    return (
        <div>
            {songs.map(song => <Song song={song}/>)}
        </div>
    )
}

export default SongList;