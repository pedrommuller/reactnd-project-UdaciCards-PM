import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from 'react-native-elements';

import reducer from './redux/reducer';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import NewCard from './components/NewCard';
import DeckDetail from './components/DeckDetail';
import QuizDetail from './components/QuizDetail';
import QuizResults from './components/QuizResults';
import HomeButton from './components/HomeButton';
import { setLocalNotificacion, clearLocalNotificacions } from './utils/api'

const Tabs = TabNavigator({
  DeckList:{
    screen: DeckList,
    navigationOptions:{
      tabBarLabel:'List'
    },
  },
  NewDeck:{
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel:'New'
    },
  }
},{
  navigationOptions:{
    header: null
  }
});

const MainNavigator = StackNavigator({
  Home:{
    screen:Tabs,
  },
  EntryDetail:{
    screen:DeckDetail,
     navigationOptions:(opt)=>( {
       headerTintColor:'#000',
       headerRight:<HomeButton onPress={()=>{
         console.log(opt.navigation);
         opt.navigation.navigate('Home')}
       } />
    }),
  },
  QuizDetail:{
    screen: QuizDetail,
    navigationOptions:{
       headerTintColor:'#000'
    }
  },
  QuizResults:{
    screen:QuizResults,
    navigationOptions:{
      headerTintColor:'#000'
    }
  },
  NewCard:{
    screen:NewCard,
      navigationOptions:{
        headerTintColor:'#000'
      }
  },
})

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
