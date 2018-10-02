import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { OrderHistoryScreen } from './OrderHistoryScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OrderHistory = StackNavigator({
  OrderHistory: {
    screen: OrderHistoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Order History',
      headerTitleStyle: {
        fontFamily: 'RobotoLight',
        fontSize: 16,
        color: '#212121'
      },
      headerLeft: <MaterialIcons name='menu' size={26} style={{paddingLeft: 16}} onPress={() => navigation.navigate('DrawerOpen')} />
    })
  }
})

export default OrderHistory
