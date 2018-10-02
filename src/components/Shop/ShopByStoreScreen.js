import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  iconStyleLeft: {
    paddingLeft: 16,
    color: '#FFFFFF'
  },
  iconStyleRight: {
    paddingRight: 16,
    color: '#FFFFFF'
  }
})

class ShopByStoreScreen extends Component {
	static navigationOptions = ({ screenProps }) => ({
    title: 'Shop By Store',
    headerStyle: {
      backgroundColor: '#8BC34A'
    },
    headerTitleStyle: {
      fontFamily: 'RobotoLight',
      fontSize: 16,
      color: '#FFFFFF'
    },
    headerLeft: <MaterialIcons name='menu' size={26} style={styles.iconStyleLeft} onPress={() => screenProps.parentProps.navigation.navigate('DrawerOpen')} />,
    headerRight: <View>
      <MaterialIcons name='shopping-cart' size={26} style={styles.iconStyleRight} />
      <View style={styles.cartBadge}>
        <Text style={[styles.cartBadgeText, {backgroundColor: screenProps.parentProps.totalQty ? '#689F38' : 'transparent'}]}>{screenProps.parentProps.totalQty}</Text>
      </View>
    </View>
  })

  render () {
    return (
      <View>
        <Text>Shop by Store</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(ShopByStoreScreen)
