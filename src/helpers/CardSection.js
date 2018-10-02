import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  cardSectionStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})

const CardSection = (props) => {
  return (
    <View style={styles.cardSectionStyle}>
      {props.children}
    </View>
  )
}

export { CardSection }
