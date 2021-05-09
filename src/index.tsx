import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import App from './App'
import { client as GraphqlClient } from './graphql/config'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={GraphqlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
