import React from 'react';
import Lyric from './Lyric';

const LyricList = ({ lyrics }) => (
    <ul className="collection">
        {lyrics.map(lyric => <Lyric key={lyric.id} {...lyric} />)}
    </ul>
)

export default LyricList;