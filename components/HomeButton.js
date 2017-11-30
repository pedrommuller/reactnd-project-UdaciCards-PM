import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

export default class HomeButton extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name="home" color="#000" style={{marginLeft:10}} />
      </TouchableOpacity>
    );
  }
}
