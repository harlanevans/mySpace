import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Segment, Header, Grid, Menu, Image,  } from 'semantic-ui-react';


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
        <Image 
        size='small-medium'
        circular
        centered
        src={ avatar } />
        <Header as='h2' textAlign='center'>
          {name}
        </Header>
        <br />
            <Segment.Group >
              <Segment color='blue' inverted textAlign='center'>
              Age: {age}

              </Segment>
              <Segment color='blue' inverted textAlign='center' >
              City: {location}

              </Segment>
          </Segment.Group>
      </div>
    )
  }
}

export default Friend;