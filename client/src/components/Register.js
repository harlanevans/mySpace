import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Button, Form, Segment, Header, Icon, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
      else
      alert('Password Do Not Match')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {

    const { email, password, passwordConfirmation, } = this.state;

    return (
      <Segment basic>
      <Header as='h1' textAlign='center'>Register</Header>
      <Form onSubmit={this.handleSubmit}>
      <Form.Input 
        label="Email"
        required
        autofocus
        name="email"
        value={email}
        placeholder='Email'
        onChange={this.handleChange}
      />
      <Form.Input 
        label="Password"
        required
        name="password"
        value={password}
        type='password'
        placeholder='Password'
        onChange={this.handleChange}
      />
      <Form.Input 
        label="Password Confirmation"
        required
        name="passwordConfirmation"
        type='password'
        value={passwordConfirmation}
        placeholder='Password Confirmation'
        onChange={this.handleChange}
      />
          <Segment textAlign="center" basic>
          <Button primary animated icon type='submit'>
          <Button.Content hidden>
          <Icon name='check' />
          </Button.Content>
          <Button.Content visible>Submit
          </Button.Content>
          </Button>
          </Segment>
      </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return( 
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}