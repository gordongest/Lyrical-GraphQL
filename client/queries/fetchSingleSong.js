import gql from 'graphql-tag';

export default gql`
    query FetchSingleSong($id: ID!) {
        song(id: $id) {
            title
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;