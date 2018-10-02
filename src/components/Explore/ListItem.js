import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native'
// import { Button } from '../../helpers'
import { addToCart, updateCart } from '../../actions/cartActions'

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

  render () {
    return (
      <View style={styles.cardStyle}>
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} source={{uri: this.props.product.image}} />
        </View>
        <View style={styles.cardSectionStyle}>
          <Text style={styles.productTitle}>{this.props.product.title}</Text>
        </View>
        <View style={styles.cardSectionStyle}>
          <Text style={styles.productPrice}>RM {this.props.product.price}</Text>
        </View>
        <TouchableNativeFeedback onPress={this.AddToCart.bind(this)} useForeground>
          <View style={styles.button}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addToCart: addToCart,
    updateCart: updateCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
