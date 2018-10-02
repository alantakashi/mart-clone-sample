import React from 'react'
import { StackNavigator } from 'react-navigation'
import { AccountScreen } from './AccountScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Account = StackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Account',
      headerTitleStyle: {
        fontFamily: 'RobotoLight',
        fontSize: 16,
        color: '#212121'
      },
      headerLeft: <MaterialIcons name='menu' size={26} style={{paddingLeft: 16}} onPress={() => navigation.navigate('DrawerOpen')} />
    })
  }
})

export default Account
