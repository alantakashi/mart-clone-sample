import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { HeaderStyle, CartStyle } from '../../styles'
import { updateCart } from '../../actions/cartActions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class ShoppingCartScreen extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: 'Shopping Cart',
    headerStyle: {
      backgroundColor: '#8BC34A'
    },
    headerTitleStyle: {
      fontFamily: 'RobotoLight',
      fontSize: 16,
      color: '#FFFFFF'
    },
    headerLeft: <MaterialIcons name='menu' size={26} style={HeaderStyle.iconStyleLeft} onPress={() => screenProps.parentProps.navigation.navigate('DrawerOpen')} />,
    headerRight: <View>
      <MaterialIcons name='shopping-cart' size={26} style={HeaderStyle.iconStyleRight} />
      <View style={HeaderStyle.cartBadge}>
        <Text style={[HeaderStyle.cartBadgeText, {backgroundColor: screenProps.parentProps.totalQty ? '#689F38' : 'transparent'}]}>{screenProps.parentProps.totalQty}</Text>
      </View>
    </View>
  })

  onIncrement (_id) {
    this.props.updateCart(_id, 1, this.props.cart)
  }

  onDecrement (_id, quantity) {
    if (quantity > 1) {
      this.props.updateCart(_id, -1, this.props.cart)
    }
  }

  render () {
    if (this.props.cart[0]) {
      return this.renderCart()
    } else {
      return this.renderEmpty()
    }
  }

  renderEmpty () {
    return (<View style={CartStyle.cartHeader}><Text>Your cart is empty</Text></View>)
  }

  renderDeliveryCharges () {
    if (this.props.totalAmount < 100) {
      return 'RM 5'
    } else {
      return 'Free'
    }
  }

  renderTotal () {
    if (this.props.totalAmount < 100) {
      return Number(this.props.totalAmount) + 5
    } else {
      return this.props.totalAmount
    }
  }

  renderCart () {
    const cartItemsList = this.props.cart.map(function (cartArr) {
      return (
        <View style={CartStyle.cartItemsListing} key={cartArr._id}>
          <View style={CartStyle.cartItemAction}>
            <TouchableOpacity style={CartStyle.cartActionButton} onPress={this.onIncrement.bind(this, cartArr._id)}>
              <MaterialIcons name='keyboard-arrow-up' size={34} />
            </TouchableOpacity>
            <Text style={CartStyle.cartItemQuantity}>{cartArr.quantity}</Text>
            <TouchableOpacity style={CartStyle.cartActionButton} onPress={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)}>
              <MaterialIcons name='keyboard-arrow-down' size={34} />
            </TouchableOpacity>
          </View>
          <View style={CartStyle.cartItemInformation}>
            <View style={CartStyle.cartItemImageContainer}>
              <Image style={CartStyle.cartItemThumbnail} source={{uri: cartArr.image}} />
            </View>
            <View><Text>{cartArr.title}</Text></View>
          </View>
          <View style={CartStyle.cartItemAmount}>
            <Text style={{textAlign: 'right'}}>{cartArr.price}</Text>
          </View>
        </View>
      )
    }, this)
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItemsList}
        </ScrollView>
        <View style={CartStyle.cartAction}>
          <View style={[CartStyle.cartSummary, CartStyle.cartSummarySubTotal]}>
            <Text style={CartStyle.cartSummaryText}>Sub Total:</Text>
            <Text style={CartStyle.cartSummaryAmount}>RM {this.props.totalAmount}</Text>
          </View>
          <View style={[CartStyle.cartSummary, CartStyle.cartSummaryDeliveryCharges]}>
            <Text style={CartStyle.cartSummaryText}>Delivery charges:</Text>
            <Text style={CartStyle.cartSummaryAmount}>{this.renderDeliveryCharges()}</Text>
          </View>
          <View style={CartStyle.cartSummaryCheckoutContainer}>
            <TouchableOpacity style={CartStyle.cartCheckoutButton}>
              <Text style={CartStyle.cartCheckoutButtonText}>CHECK OUT</Text>
            </TouchableOpacity>
            <Text style={[CartStyle.cartSummaryAmount, CartStyle.cartSummaryTotal]}>RM {this.renderTotal()}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQty: state.cart.totalQty
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    updateCart: updateCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen)
