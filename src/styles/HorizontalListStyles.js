import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  HorizontalListContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#eee'
  },
  HorizontalListTop: {
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
  HorizontalListBottom: {
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
  }
})
