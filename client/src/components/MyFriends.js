import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Card, Divider, Image, Header, Button, Icon } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/my_friends')
      .then(res => this.setState({ friends: res.data, }));
  }

  unfollow = (id) => {
    const { friends, } = this.state;
    this.setState({ friends: friends.filter(f => f.id !== id) })
  }

  render() {
    const { friends, id } = this.state;
    return (
      <div>
        <br />
        <Header as='h1' textAlign='center'>Your Friends</Header>
        <br />
        <Card.Group itemsPerRow={4}>
          {friends.map(friend =>
            <Card key={friend.id} {...id}>
              <Image src={friend.avatar} />
              <Card.Content>
                <Card.Header floated='left' >
                  {friend.name}
                </Card.Header>
                <Divider />
                <Button color="red" icon animated floated='right' basic onClick={() => this.unfollow(friend.id)}>
                  <Button.Content visible>
                    Unfollow
                </Button.Content>
                  <Button.Content hidden>
                    <Icon name="thumbs down" />
                  </Button.Content>
                </Button>
                <Link to={`/friends/${friend.id}`}>
                  <Button color="blue" icon animated floated='left' basic>
                    <Button.Content visible>
                      View
                </Button.Content>
                    <Button.Content hidden>
                      <Icon name="eye" />
                    </Button.Content>
                  </Button>
                </Link>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </div>
    )
  }
}

export default MyFriends;