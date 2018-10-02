import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import ShoppingCartScreen from './ShoppingCartScreen'

const ShoppingCartStack = StackNavigator({
  ShoppingCart: {
    screen: ShoppingCartScreen
  }
})

class ShoppingCart extends Component {
  render () {
    return (
      <ShoppingCartStack screenProps={{parentProps: this.props}} />
    )
  }
}

const mapStateToProps = state => {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(ShoppingCart)
