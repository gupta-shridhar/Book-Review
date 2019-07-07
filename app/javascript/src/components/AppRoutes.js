import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Books from '../components/books/list';
import NewBook from './books/new';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Books} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/new" component={NewBook} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
