import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  Render() {
    <View>
      <Header />;
      <Post image={require('./assets/imgs/fence.jpg')} />
    </View>;
  }
}
