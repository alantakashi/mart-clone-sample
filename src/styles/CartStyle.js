import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cartItemsListing: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 8
  },
  cartItemImageContainer: {
    marginRight: 8
  },
  cartItemThumbnail: {
    backgroundColor: '#000',
    height: 50,
    width: 50
  },
  cartItemAction: {
    flex: 0.15
  },
  cartActionButton: {
    borderRadius: 0,
    borderWidth: 0,
    alignSelf: 'center'
  },
  cartItemQuantity: {
    textAlign: 'center'
  },
  cartItemInformation: {
    flex: 0.55,
    alignItems: 'center',
    flexDirection: 'row'
  },
  cartItemAmount: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 16
  },
  cartSummaryContainer: {
    backgroundColor: '#66c8d3'
  },
  cartAction: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF'
  },
  cartSummary: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 4
  },
  cartSummaryText: {
    flex: 0.75,
    paddingLeft: 8,
    fontSize: 13,
    fontWeight: 'normal'
  },
  cartSummaryAmount: {
    flex: 0.25,
    paddingRight: 8,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  cartSummarySubTotal: {
    paddingTop: 8
  },
  cartSummaryDeliveryCharges: {
    paddingBottom: 8
  },
  cartSummaryCheckoutContainer: {
    flexDirection: 'row'
  },
  cartCheckoutButton: {
    flex: 0.75,
    backgroundColor: '#689F38'
  },
  cartCheckoutButtonText: {
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  cartSummaryTotal: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#8BC34A'
  }
})
