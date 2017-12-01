import React from 'react';
import { View } from 'react-native';
import {
  Text,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  h4
} from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../redux/actions.js'

class NewCard extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      question:'',
      answer:'',
    }
  }

  addCard = (key,element) =>{
    const { navigate } = this.props.navigation;
    element.questions.push({
      question:this.state.question,
      answer:this.state.answer
    });
    this.props.actions.addCard(key, element);
    navigate(
      'EntryDetail',
      { key: key }
    );
  }

  render() {
    const key = this.props.navigation.state.params.key;
    const element = this.props.decks[key];

    return (
      <View>
        <Text style={{marginBottom: 10, textAlign:'center'}} h4>
          Add a new card to {key}
        </Text>
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={(text)=>{
          this.setState({question:text})
        }} value = {this.state.question} />
        {
          this.state.question==='' &&
          <FormValidationMessage>
            Question is required
          </FormValidationMessage>
        }
        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={(text)=>{
          this.setState({answer:text})
        }} value = {this.state.answer} />
        {
          this.state.answer==='' &&
          <FormValidationMessage>
            Answer is required
          </FormValidationMessage>
        }
        <Button
          large
          buttonStyle={{margin:10}}
          icon = {{name: 'plus', type:'font-awesome'}}
          title='Submit' onPress = {()=>{
            if(this.state.answer!=='' && this.state.question!==''){
              this.addCard(key,element);
            }
          }}  />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {actions:bindActionCreators({...actions}, dispatch)}
)
const mapStateToProps = ({decks}) => ({decks});
export default connect(mapStateToProps, mapDispatchToProps)(NewCard)
