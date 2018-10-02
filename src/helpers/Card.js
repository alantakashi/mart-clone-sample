import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5
  }
})

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  )
}

export { Card }
