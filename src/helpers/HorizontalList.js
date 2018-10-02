import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import { addToCart, updateCart, deleteCartItem } from '../actions/cartActions'
import { selectProduct } from '../actions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  cardStyle: {
    width: 200,
    marginRight: 16
  },
  cardSectionStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  productTitle: {
    fontFamily: 'RobotoBold',
    paddingRight: 16,
    paddingLeft: 16,
    minHeight: 60
  },
  productPrice: {
    padding: 16
  },
  button: {
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: '#CDDC39',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#555555'
  }
})

class ListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }

  onIncrement (_id) {
    this.props.updateCart(_id, 1, this.props.cart)
  }

  onDecrement (_id, quantity) {
    if (quantity > 1) {
      this.props.updateCart(_id, -1, this.props.cart)
    } else if (quantity >= 0) {
      this.onDelete(_id)
    }
  }

  onDelete (_id) {
    const currentCartToDelete = this.props.cart
    const indexToDelete = currentCartToDelete.findIndex((cart) => cart._id === _id)
    let cartAfterDelete = [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete + 1)]
    this.props.deleteCartItem(cartAfterDelete)
  }

  AddToCart () {
    const product = [...this.props.cart, {
      _id: this.props.product._id,
      title: this.props.product.title,
      price: this.props.product.price.toFixed(2),
      image: this.props.product.image,
      quantity: 1
    }]

    // check if cart is empty
    if (this.props.cart.length > 0) {
      let _id = this.props.product._id
      let cartIndex = this.props.cart.findIndex(function (cart) {
        return cart._id === _id
      })

      if (cartIndex === -1) {
        this.props.addToCart(product)
      } else {
        this.props.updateCart(_id, 1, this.props.cart)
      }
    } else {
      this.props.addToCart(product)
    }
  }

  renderButton () {
    if (this.props.cart.length > 0) {
      let _id = this.props.product._id
      let cartIndex = this.props.cart.findIndex((cart) => cart._id === _id)
      let item = this.props.cart.find((cart) => cart._id === _id)

      if (cartIndex === -1) {
        return (
          <TouchableNativeFeedback onPress={this.AddToCart.bind(this)} useForeground>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ADD TO CART</Text>
            </View>
          </TouchableNativeFeedback>
        )
      } else {
        return (
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#CDDC39', paddingTop: 9, paddingBottom: 9}}>
            <TouchableOpacity style={{ flex: 0.2}} onPress={this.onDecrement.bind(this, item._id, item.quantity)}>
              <MaterialIcons name='remove' size={24} style={{textAlign: 'center'}} />
            </TouchableOpacity>
            <Text style={{ flex: 0.6, textAlign: 'center', fontWeight: 'bold'}}>{item.quantity}</Text>
            <TouchableOpacity style={{ flex: 0.2}} onPress={this.onIncrement.bind(this, item._id)}>
              <MaterialIcons name='add' size={24} style={{textAlign: 'center'}} />
            </TouchableOpacity>
          </View>
        )
      }
    } else {
      return (
        <TouchableNativeFeedback onPress={this.AddToCart.bind(this)} useForeground>
          <View style={styles.button}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }
  }

  render () {
    return (
      <View style={styles.cardStyle}>
        <TouchableWithoutFeedback onPress={() => this.props.navigate('Second', {item: this.props.product})} title='Go to sample screen'>
          <View>
            <View style={styles.cardSectionStyle}>
              <Image style={styles.imageStyle} source={{uri: this.props.product.image}} />
            </View>
            <View style={styles.cardSectionStyle}>
              <Text style={styles.productTitle}>{this.props.product.title}</Text>
            </View>
            <View style={styles.cardSectionStyle}>
              <Text style={styles.productPrice}>RM {this.props.product.price}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {this.renderButton()}
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    selectedProductId: state.selectedProductId,
    cart: state.cart.cart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addToCart: addToCart,
    updateCart: updateCart,
    deleteCartItem: deleteCartItem,
    selectProduct: selectProduct
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
