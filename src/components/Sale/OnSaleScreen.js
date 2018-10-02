import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView, ListView } from 'react-native'
import HorizontalList from '../../helpers/HorizontalList'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#eee'
  },
  topContainer: {
    borderWidth: 1,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 8,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  bottomContainer: {
    justifyContent: 'flex-start',
    paddingBottom: 16
  },
  productContentMedia: {
    flex: 1,
    width: null,
    height: 200
  },
  sectionHeader: {
    paddingTop: 16,
    paddingBottom: 16,
    marginRight: 16,
    fontFamily: 'RobotoBold',
    fontSize: 16,
    color: '#212121',
    textAlign: 'left'
  },
  productContainer: {
    paddingLeft: 16,
    paddingBottom: 16,
    marginBottom: 16,
    backgroundColor: '#fff'
  },
  cardStyle: {
    width: 200,
    marginRight: 16
  },
  bannerStyle: {
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 8,
    width: null,
    height: 200
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: 10
  },
  cartBadgeText: {
    borderRadius: 10,
    width: 20,
    height: 20,
    color: '#FFFFFF',
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 16
  },
  iconStyleLeft: {
    paddingLeft: 16,
    color: '#FFFFFF'
  },
  iconStyleRight: {
    paddingRight: 16,
    color: '#FFFFFF'
  }
})

class OnSaleScreen extends Component {
  componentWillMount () {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.products.top_picks)
  }

  static navigationOptions = ({ screenProps }) => ({
    title: 'On Sale',
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

  renderRow (product) {
    return <HorizontalList product={product} />
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <Image style={styles.productContentMedia} source={{uri: 'https://rm-goldenmedia.imgix.net/f4e052c79258447b50cccb2b979103f1.jpg?auto=format'}} />
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.sectionHeader}>All Sales</Text>
              </View>

              <ListView horizontal dataSource={this.dataSource} renderRow={this.renderRow} showsHorizontalScrollIndicator={false} />

            </View>
            {this.props.products.banners.map((banner, i) => (
              <View key={i}>
                <Image style={styles.bannerStyle} source={{uri: banner.image}} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
};

const mapStateToProps = state => {
  return {
    products: state.products,
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(OnSaleScreen)
