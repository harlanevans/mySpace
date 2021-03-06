import React, { Fragment } from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import MyFriends from './components/MyFriends';
import Friend from './components/Friend';

import { Container, } from "semantic-ui-react";
import { Switch, Route, } from 'react-router-dom';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my_friends" component={MyFriends} />
          <ProtectedRoute exact path="/friends/:id" component={Friend} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>

)

export default App;
