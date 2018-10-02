import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class NewScreen extends Component {
  render() {
    return (
      <View>
        <Text>New Product</Text>
      </View>
    )
  }
}

export { NewScreen };