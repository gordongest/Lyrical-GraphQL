import React from 'react';
import { graphql } from "react-apollo";
import likeLyric from "../queries/likeLyric";

const Lyric = ({ id, content, mutate }) => {
    const handleClick = e => {
        e.preventDefault();

        mutate({
            variables: {
                id
            }
        })
            .then()
            .catch(err => console.warn("ERR:", err.message))

    }

    return (
        <li className="collection-item">
            {content}
            <i className="material-icons" onClick={handleClick}>thumb_up</i>
        </li>
    )
}

export default graphql(likeLyric)(Lyric);