import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import OnSaleScreen from './OnSaleScreen'

const OnSaleStack = StackNavigator({
  OnSale: {
    screen: OnSaleScreen
  }
})

class OnSale extends Component {
  render () {
    return (
      <OnSaleStack screenProps={{parentProps: this.props}} />
    )
  }
}

const mapStateToProps = state => {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(OnSale)
