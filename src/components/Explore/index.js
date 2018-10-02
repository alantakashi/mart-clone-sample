import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import ExploreScreen from './ExploreScreen'
import SecondScreen from './Item'

const ExploreStack = StackNavigator({
  Explore: {
    screen: ExploreScreen
  },
  Second: {
    screen: SecondScreen
  }
})

class Explore extends Component {
  render () {
    return (
      <ExploreStack screenProps={{ parentProps: this.props }} />
    )
  }
}

const mapStateToProps = state => {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(Explore)
