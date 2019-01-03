import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter, } from 'react-router-dom';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right' icon='labeled'>
          <Link to='/login'>
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === '/login'}
            >
            <Icon name='user circle'/>
            Login
            </Menu.Item>
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/location'}
            >
            <Icon name='signup'/>
            Sign Up!
            </Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu icon='labeled' secondary color='blue' inverted basic>

          <Menu.Item name="users">
            <Icon name="users" />
            <b>
              mySpace
              </b>
          </Menu.Item>

          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            >
              <Icon name="home" />
              Home
            </Menu.Item >
          </Link>
            {this.rightNavItems()}
        </Menu>
      </div>
        )
      }
    }
    
export class ConnectedNavbar extends React.Component {
          render() {
        return (
      <AuthConsumer>
          {auth =>
            <Navbar {...this.props} auth={auth} />
          }
        </AuthConsumer>
        )
      }
    }
    
export default withRouter(ConnectedNavbar);