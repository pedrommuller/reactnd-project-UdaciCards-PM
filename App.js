import React from 'react';
import { Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from 'react-native-elements';

import MainNavigator from './utils/navigators';
import reducer from './redux/reducer';
import { setLocalNotificacion, clearLocalNotificacions } from './utils/api'


export default class App extends React.Component {
  componentDidMount(){
    setLocalNotificacion()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
