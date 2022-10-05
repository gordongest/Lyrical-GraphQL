import React, { Component, useState } from 'react';
import { hashHistory, Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from "../queries/fetchSongs";

class SongCreator extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        })
            .then(() => hashHistory.push('/'))
            .catch(err => console.warn("ERR:", err.message));
    }

    render() {
        return (
            <div className="container">
                <Link to="/">Back</Link>
                <h3>create a new song</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="song-title">Song Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

// const SongCreatorFunc = ({ mutate }) => {
//     const [title, setTitle] = useState('');
//
//     const handleChange = e => setTitle(e.target.value);
//     const handleSubmit = e => {
//         e.preventDefault();
//
//         mutate({
//             variables: {
//                 title: title
//             }
//         });
//     }
//
//     return (
//         <div>
//             <h3>create a new song</h3>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="song-title">Song Title</label>
//                 <input type="text" value={title} onChange={handleChange}/>
//             </form>
//         </div>
//     )
// }

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title) {
            title
        }
    }
`

export default graphql(mutation)(SongCreator)