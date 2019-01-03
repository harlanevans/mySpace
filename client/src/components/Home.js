import React from 'react';
import { Header, } from "semantic-ui-react";
import { Link, } from 'react-router-dom';

const Home = () => (
  <Header as='h2'
  textAlign="center"
  >
  <br />
  {/* Put some if else statment here. If not signed in, put this below. If signed in make a different Home page look */}
  Please 
  <Link to='/login' >
   Sign In  
  </Link>
  to View Your Friends and Space.
  </Header>
)

export default Home;