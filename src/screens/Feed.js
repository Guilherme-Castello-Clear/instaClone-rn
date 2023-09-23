import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Castello',
        email: 'g@c.com',
        image: require('../../assets/imgs/fence,jpg'),
        comments: [
          {
            nickname: 'FulanoA',
            comment: 'legal',
          },
          {
            nickname: 'FulanoB',
            comment: 'legal B',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Castello',
        email: 'g@c.com',
        image: require('../../assets/imgs/fence,jpg'),
        comments: [],
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.props.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
