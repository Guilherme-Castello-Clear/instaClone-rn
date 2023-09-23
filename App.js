import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';
import AddComment from './src/components/addComment';

export default class App extends Component {
  Render() {
    const comments = [
      {
        nickname: 'Castello',
        comment: 'Brabo mlkao',
      },
      {
        nickname: 'Elis',
        comment: 'Faço melhor',
      },
    ];
    return (
      <View style={{flex: 1}}>
        <Header />;
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
        <AddComment />
      </View>
    );
  }
}
