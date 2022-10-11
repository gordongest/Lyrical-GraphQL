import React, { Component, useState } from 'react';
import { graphql } from 'react-apollo';
import addLyricToSong from '../queries/addLyricToSong';

class LyricCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ content: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                songId: this.props.songId,
                content: this.state.content
            }
        })
            .then(() => this.setState({ content: '' }))
            .catch(err => console.warn("ERR:", err.message));
    }

    render() {
        return (
            <div>
                <h5>Add Lyrics</h5>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="lyric-content">Enter Lyrics</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

const LyricCreatorFunctional = ({ songId, mutate }) => {
    const [content, setContent] = useState('');

    const handleChange = e => setContent(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        mutate({
            variables: {
                songId,
                content
            }
        })
            .then(() => setContent(''))
            .catch(err => console.warn("ERR:", err.message));
    }

    return (
        <div>
            <h5>Add Lyrics</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="lyric-content">Enter Lyrics</label>
                <input type="text" value={content} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default graphql(addLyricToSong)(LyricCreator);