import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Segment, Header, Button, Icon, Image, SegmentGroup,  } from 'semantic-ui-react';


class Friend extends React.Component {
  state = { friends: {}, posts: [], activeItem: 'age'};

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/friends/${id}`)
      .then(res => this.setState({ friends: res.data, }))
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  

  render() {
    const { friends: { name, age, location, avatar }, } = this.state;
    return (
      <div>
        <br />
        <Link to="/my_friends">
        <Button
        basic
        color='blue'
        animated
        >
        <Button.Content visible>
        Back to My Friends
        </Button.Content>
        <Button.Content hidden>
        <Icon name='left arrow' />
        </Button.Content>
        </Button>
        </Link>
        <br />
        <Image 
        size='small-medium'
        circular
        centered
        src={ avatar } />
        <br />
        <div>

              <Segment basic textAlign='center'>
              <Header as='h3'>
              {name}
              </Header>
              </Segment>

              <Segment basic textAlign='center'>
              Age: {age}
              </Segment>


              <Segment basic textAlign='center'>
              City: {location}
              </Segment>
        </div>
      </div>
    )
  }
}

export default Friend;