import React from 'react';
import { graphql } from 'react-apollo';
import likeLyric from '../queries/likeLyric';
import '../style/style.css';

const Lyric = ({ id, content, likes, mutate }) => {
    const handleClick = (e, prevLikes) => {
        e.preventDefault();

        mutate({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    likes: prevLikes + 1,
                    __typename: 'LyricType'
                }
            }
        })
            .catch(err => console.warn("ERR:", err.message))

    }

    return (
        <li className="collection-item">
            {content}
            <div className="like-box">
                <i className="material-icons" onClick={(e, prevLikes) => handleClick(e, likes)}>thumb_up</i>
                {likes}
            </div>
        </li>
    )
}

export default graphql(likeLyric)(Lyric);