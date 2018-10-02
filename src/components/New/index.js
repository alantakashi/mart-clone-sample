import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { NewScreen } from './NewProductScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const New = StackNavigator({
  New: {
    screen: NewScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'New',
      headerTitleStyle: {
        fontFamily: 'RobotoLight',
        fontSize: 16,
        color: '#212121'
      },
      headerLeft: <MaterialIcons name='menu' size={26} style={{paddingLeft: 16}} onPress={() => navigation.navigate('DrawerOpen')} />
    })
  }
})

export default New
