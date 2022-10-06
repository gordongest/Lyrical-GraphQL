import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSingleSong from '../queries/fetchSingleSong';

class SongDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.data.loading ?
                    <div>
                        Loading...
                    </div>
                    :
                    <div>
                        {this.props.data.song.title}
                    </div>
                }
            </div>
        )
    }
}

export default graphql(
    fetchSingleSong, {
        options: props => ({
            variables: { id :props.params.id }
        })
    })(SongDetail);