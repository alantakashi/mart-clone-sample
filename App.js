import React, { Component } from 'react'
import { View } from 'react-native'
import { Drawer } from './src/helpers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: ''
    }

    firebase.initializeApp(config)
  };

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Drawer />
        </View>
      </Provider>
    )
  }
};

export default App
