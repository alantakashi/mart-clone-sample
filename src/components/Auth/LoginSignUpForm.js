import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const LeftScreen = ({ navigation }) => (
  <View>
    <Text>Left</Text>
  </View>
)

const RightScreen = ({ navigation }) => (
  <View>
    <Text>Right</Text>
  </View>
)

const DrawerLeft = DrawerNavigator({
  Left: {
    screen: LeftScreen
  }
})

const DrawerRight = DrawerNavigator({
  Right: {
    screen: RightScreen
  }
})

const LeftStack = StackNavigator({
  LeftStack: {
    screen: DrawerLeft,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
})

const RightStack = StackNavigator({
  RightStack: {
    screen: DrawerRight,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
})

const TabStack = TabNavigator({
  tabLeft: {
    screen: LeftStack
  },
  tabRight: {
    screen: RightStack
  }
})

const LoginSignUpFormScreen = () => {
  return (
    <TabStack />
  )
}

const LoginSignUpForm = StackNavigator({
  LoginSignUpForm: {
    screen: LoginSignUpFormScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Account',
      headerTitleStyle: {
        fontFamily: 'RobotoLight',
        fontSize: 16,
        color: '#212121'
      },
      headerLeft: <MaterialIcons name='menu' size={26} style={{paddingLeft: 16}} onPress={() => navigation.navigate('DrawerOpen')} />
    })
  }
})

export { LoginSignUpForm, LoginSignUpFormScreen }
