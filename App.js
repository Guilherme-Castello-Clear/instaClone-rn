import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  Render() {
    <View style={{flex: 1}}>
      <Header />;
      <Post image={require('./assets/imgs/fence.jpg')} />
    </View>;
  }
}
