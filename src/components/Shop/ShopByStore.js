import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import ShopByStoreScreen from './ShopByStoreScreen'

const ShopByStoreStack = StackNavigator({
  ShopByStore: {
    screen: ShopByStoreScreen
  }
})

class ShopByStore extends Component {
  render () {
    return (
      <ShopByStoreStack screenProps={{parentProps: this.props}} />
    )
  }
}

const mapStateToProps = state => {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(ShopByStore)
