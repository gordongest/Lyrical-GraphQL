import React, { Component, useState } from 'react';
import { hashHistory, Link } from 'react-router';
import { graphql } from 'react-apollo';
import addSong from "../queries/addSong";
import fetchSongs from "../queries/fetchSongs";

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
            // refetch with specific query after submit
            refetchQueries: [{ query: fetchSongs }]
        })
            // go back to index page
            .then(() => hashHistory.push('/'))
            .catch(err => console.warn("ERR:", err.message));
    }

    render() {
        return (
            <div className="container">
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="song-title">Song Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

// const SongCreatorFunctional = ({ mutate }) => {
//     const [title, setTitle] = useState('');
//
//     const handleChange = e => setTitle(e.target.value);
//
//     const handleSubmit = e => {
//         e.preventDefault();
//
//         mutate({
//             variables: { title },
//             refetchQueries: [{ query: fetchSongs }]
//         })
//             .then(() => hashHistory.push('/'))
//             .catch(err => console.warn("ERR:", err.message));
//     }
//
//     return (
//         <div className="container">
//             <Link to="/">Back</Link>
//             <h3>Create a New Song</h3>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="song-title">Song Title</label>
//                 <input type="text" value={title} onChange={handleChange}/>
//             </form>
//         </div>
//     )
// }

export default graphql(addSong)(SongCreator)