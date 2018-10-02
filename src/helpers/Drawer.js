import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FoundationIcons from 'react-native-vector-icons/Foundation'
import { getDrawerNavigationOptions } from '../helpers/Navigation'
import { Account, OnSale, New, Explore, OrderHistory, ShopByStore, ShoppingCart } from '../components'

const Drawer = DrawerNavigator({
  Account: {
    screen: Account,
    navigationOptions: getDrawerNavigationOptions('Account', ({ tintColor, focused }) => <MaterialIcons name='account-box' size={26} color={tintColor} />)
  },
  OnSale: {
    screen: OnSale,
    navigationOptions: getDrawerNavigationOptions('On Sale', ({ tintColor, focused }) => <FoundationIcons name='burst-sale' size={26} color={tintColor} />)
  },
  New: {
    screen: New,
    navigationOptions: getDrawerNavigationOptions('New', ({ tintColor, focused }) => <FoundationIcons name='burst-new' size={26} color={tintColor} />)
  },
  Explore: {
    screen: Explore,
    navigationOptions: getDrawerNavigationOptions('Explore', ({ tintColor, focused }) => <MaterialIcons name='explore' size={26} color={tintColor} />)
  },
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: getDrawerNavigationOptions('Order History', ({ tintColor, focused }) => <MaterialIcons name='restore' size={26} color={tintColor} />)
  },
  ShopByStore: {
    screen: ShopByStore,
    navigationOptions: getDrawerNavigationOptions('Shop By Store', ({ tintColor, focused }) => <MaterialIcons name='store' size={26} color={tintColor} />)
  },
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: getDrawerNavigationOptions('Shopping Cart', ({ tintColor, focused }) => <MaterialIcons name='local-mall' size={26} color={tintColor} />)
  }
}, {
  initialRouteName: 'Explore',
  drawerPosition: 'left'
})

export { Drawer }
