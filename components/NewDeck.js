import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
  Text,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  h3
} from 'react-native-elements';

import * as actions from '../redux/actions.js'

class NewDeck extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      title:'',
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={{marginBottom: 10, textAlign:'center'}} h3>
          What is the title of your deck?
        </Text>
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={(text)=>{
          this.setState({title:text})
        }} value = {this.state.title} />
        {
          this.state.title==='' &&
          <FormValidationMessage>
            Title is required
          </FormValidationMessage>


        }
        <Button
          large
          buttonStyle={{margin:10}}
          icon = {{name: 'plus', type:'font-awesome'}}
          title='Submit' onPress = {()=>{
            if(this.props.decks[this.state.title] !== undefined){
              return;
            }
            if(this.state.title!=='' ){
              this.props.actions.addDeck(this.state.title);
              navigate('DeckList');
            }
          }}  />
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators({...actions}, dispatch)
  }
}

function mapStateToProps(state){
  return {
    decks:state.decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
