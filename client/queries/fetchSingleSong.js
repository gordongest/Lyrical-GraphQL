import gql from 'graphql-tag';

export default gql`
    query fetchSingleSong($id: ID!) {
        song(id: $id) {
            title
            id
        }
    }
`;