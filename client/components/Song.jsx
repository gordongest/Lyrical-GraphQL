import React from 'react';
import { graphql } from 'react-apollo'
import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';
import "../style/style.css"
import { Link } from "react-router";

const Song = ({ title, id, mutate }) => {
    const handleDelete = () => {
        mutate({
            variables: { id },
            refetchQueries: [{ query: fetchSongs }]
        })
            .catch(err => console.warn("ERR:", err.message));
    }

    return (
            <li className="collection-item">
                <Link to={`/songs/${id}`}>
                    {title}
                </Link>
                <i
                    className="material-icons"
                    onClick={handleDelete}>
                    delete
                </i>
            </li>
    )
}

export default graphql(deleteSong)(Song);