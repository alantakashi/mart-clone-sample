import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  appbar: {
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.9,
    elevation: 5,
    position: 'relative'
  },
  appbarIconMenu: {
    color: '#2196F3'
  },
  appbarIconCart: {
    color: '#2196F3'
  },
  appbarTitle: {
    fontFamily: 'RobotoLight',
    fontSize: 16,
    color: '#212121'
  }
})

const Appbar = (props) => {
  const { appbar, appbarIconMenu, appbarTitle, appbarIconCart } = styles

  return (
    <View style={appbar}>
      <MaterialIcons name='menu' size={30} style={appbarIconMenu} onPress={this.openDrawer} />
      <Text style={appbarTitle}>{props.headerText}</Text>
      <MaterialIcons name='shopping-cart' size={30} style={appbarIconCart} />
    </View>
  )
}

export { Appbar }
