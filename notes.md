graph ql - can ask for specific items when requesting.

apps can be faster, because dont need to retrieve all data when request from server.

npm i graphql express-graphql express axios

https://www.apollographql.com/docs/react/
npm install apollo-boost @apollo/react-hooks graphql react-apollo

1. App.js
   import ApolloClient from 'apollo-boost'
   import {ApolloProvider} from 'react-apollo'

   const client = new ApolloClient({
   uri:'http://localhost:5000/graphql'
   })
   <ApolloProvider client={client}>
   </ApolloProvider>
