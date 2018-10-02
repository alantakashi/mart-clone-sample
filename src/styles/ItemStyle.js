import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  productImageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  productImage: {
    width: 200,
    height: 200
  },
  productTitle: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: '500'
  },
  productDescription: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    fontSize: 13,
    lineHeight: 18
  },
  productActionContainer: {
    position: 'absolute',
    bottom: '0',
    backgroundColor: '#eeeeee'
  }
})
