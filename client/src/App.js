import React, { Fragment } from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

import { Container, } from "semantic-ui-react";
import { Switch, Route, } from 'react-router-dom';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>

)

export default App;
