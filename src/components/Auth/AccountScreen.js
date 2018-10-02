import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginForm from './LoginForm';
import { Button } from '../../helpers'
import firebase from 'firebase';


const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginRight: 5,
      marginLeft: 5
    },
    buttonTextStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    }
});

class AccountScreen extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Text>You are loggedIn</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => firebase.auth().signOut()} >
              <Text style={styles.buttonTextStyle}>Log Out</Text>
            </TouchableOpacity>
          </View>
        );

      case false:
        return <LoginForm />;

      // default:
      //   return <Spinner size="large" />;
    }

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
};

export { AccountScreen };
