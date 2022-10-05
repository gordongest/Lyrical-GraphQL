import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client";
import { ApolloProvider} from "react-apollo";
import SongList from "./components/SongList";

const client = new ApolloClient({})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SongList /*songs={[{name: "a sample song"}]}*/ />
    </ApolloProvider>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
