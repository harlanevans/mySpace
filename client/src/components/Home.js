import React from 'react';
import axios from 'axios';
import { Header, Card, Icon, Button, Image, Container, Divider } from "semantic-ui-react";
import { Link, } from 'react-router-dom';

class Home extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/friends')
      .then(res => this.setState({ friends: res.data, }));
  }

  sample = () => {
    const { friends, } = this.state;
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
    }
  }

  unfollow = (id) => {
    const { friends, } = this.state;
    this.setState({ friends: friends.filter(f => f.id !== id) })
  }

  follow = (id) => {
    const { friends, } = this.state;
    axios.put(`/api/friends/${id}`)
      .then(() => this.setState({ friends: friends.filter(f => f.id !== id) }));
  }

  render() {
    const friend = this.sample();
    if (friend) {
      return (
        <Container>
          <br />
          <Header as="h3" textAlign='center'>New mySpace Friends</Header>
          <br />
          <Card
            centered
            key={friend.id}
          >
            <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                {friend.name}
              </Card.Header>
              <Card.Description>
                {friend.age}
              </Card.Description>
              <Card.Meta>
                {friend.location}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="green" icon animated floated='left' basic onClick={() => this.follow(friend.id)}>
                <Button.Content visible>
                  Follow
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="thumbs up" />
                </Button.Content>
              </Button>
              <Button color="red" icon floated='right' animated basic onClick={() => this.unfollow(friend.id)}>
                <Button.Content visible>
                Skip
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="thumbs down" />
                </Button.Content>
              </Button>
            </Card.Content>
          </Card>
          <br />
          <br />
          <br />
        </Container>
      )
    } else {
      return <Header textAlign='center'>You don't have any friends :(</Header>
    }
  }
}

export default Home;