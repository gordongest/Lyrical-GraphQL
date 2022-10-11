import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider} from 'react-apollo';
import App from './components/App';
import SongList from './components/SongList';
import SongCreator from './components/SongCreator';
import SongDetail from './components/SongDetail';

// watch object ids, refetch on change
const client = new ApolloClient({
    dataIdFromObject: object => object.id || null
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
            <Route exact path="/" component={App}>
                <IndexRoute component={SongList}/>
            </Route>
            <Route exact path="/songs/create" component={SongCreator} />
            <Route exact path="/songs/:id" component={SongDetail} />
        </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
