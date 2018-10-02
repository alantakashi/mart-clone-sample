import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import { addToCart, updateCart, deleteCartItem } from '../../actions/cartActions'
import { selectProduct } from '../../actions'
import { ItemStyle, ButtonStyle } from '../../styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  button: {
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: '#CDDC39',
    alignItems: 'center',
    justifyContent: 'center',
    height: 38
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#555555'
  }
})

class SecondScreen extends Component {
	constructor (props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }

	static navigationOptions = {
		title: 'Second screen'
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
      _id: this.props.navigation.state.params.item._id,
      title: this.props.navigation.state.params.item.title,
      price: this.props.navigation.state.params.item.price.toFixed(2),
      image: this.props.navigation.state.params.item.image,
      quantity: 1
    }]

    // check if cart is empty
    if (this.props.cart.length > 0) {
      let _id = this.props.navigation.state.params.item._id
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
      let _id = this.props.navigation.state.params.item._id
      let cartIndex = this.props.cart.findIndex((cart) => cart._id === _id)
      let cartItem = this.props.cart.find((cart) => cart._id === _id)

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
          <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 0, bottom: 0, left: 0, backgroundColor: '#CDDC39' }}>
            <TouchableOpacity style={{ flex: 0.2, paddingTop:8, paddingBottom: 8, backgroundColor: '#CDDC39', height: 38 }} onPress={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)}>
              <MaterialIcons name='remove' size={24} style={{textAlign: 'center'}} />
            </TouchableOpacity>
            <Text style={{ flex: 0.6, paddingTop:8, paddingBottom: 8, backgroundColor: '#CDDC39', height: 38, textAlign: 'center', fontWeight: 'bold' }}>{cartItem.quantity}</Text>
            <TouchableOpacity style={{ flex: 0.2, paddingTop:8, paddingBottom: 8, backgroundColor: '#CDDC39', height: 38 }} onPress={this.onIncrement.bind(this, cartItem._id)}>
              <MaterialIcons name='add' size={24} style={{textAlign: 'center'}} />
            </TouchableOpacity>
          </View>
        )
      }
    } else {
      return (
      	<TouchableNativeFeedback onPress={this.AddToCart.bind(this)} useForeground>
      		<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, bottom: 0, left: 0, paddingTop:8, paddingBottom: 8, backgroundColor: '#CDDC39', height: 38 }}>
            <Text style={ styles.buttonText }>ADD TO CART</Text>
        	</View>
      	</TouchableNativeFeedback>
      )
    }
  }

	render() {
		console.log('this.props', this.props)
		const { item } = this.props.navigation.state.params
		return (
			<View style={ItemStyle.productContainer}>
				<View style={ItemStyle.productImageContainer}>
					<Image style={ItemStyle.productImage} source={{uri: item.image}} />
				</View>
				<Text style={ItemStyle.productTitle}>{item.title}</Text>
				<Text style={ItemStyle.productDescription}>{item.description}</Text>

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

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen)
