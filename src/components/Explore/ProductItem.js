import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from '../../helpers'
import { addToCart, updateCart } from '../../actions/cartActions'

const styles = StyleSheet.create({
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
  }
})

class ProductItem extends Component {
  handleCart () {
    const product = [...this.props.cart, {
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price.toFixed(2),
      image: this.props.image,
      quantity: 1
    }]

    // check if cart is empty
    if (this.props.cart.length > 0) {
      let _id = this.props._id
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

  constructor () {
    super()
    this.state = {
      isClicked: false
    }
  }

  render () {
    return (
      <View>
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} source={{uri: this.props.image}} />
        </View>
        <View style={styles.cardSectionStyle}>
          <Text style={styles.productTitle}>{this.props.title}</Text>
        </View>
        <View style={styles.cardSectionStyle}>
          <Text style={styles.productPrice}>RM {this.props.price}</Text>
        </View>
        <Button onPress={this.handleCart.bind(this)}>Buy Now</Button>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    picks: state.products.top_picks,
    cart: state.cart.cart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addToCart: addToCart,
    updateCart: updateCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
