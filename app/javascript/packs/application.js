import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { client } from "../src/apollo"
import { ApolloProvider } from "react-apollo"

import AppRoutes from '../src/components/AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/stylesheets/App.scss';

class Application extends Component {
  render() { 
    return ( 
      <ApolloProvider client={client}>
        <div>
          <AppRoutes />
        </div>
      </ApolloProvider>
     );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.body.appendChild(document.createElement('div')),
  )
})

