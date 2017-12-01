import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'

class DeckDetail extends React.Component {

  render() {
    const key = this.props.navigation.state.params.key;
    const element = this.props.decks[key];
    const { navigate } = this.props.navigation;
    const image = element.cover === undefined? require('../assets/default-cover.png'):{uri:element.cover};
    return (
      <Card title={element.title}
          backgroundColor="blue"
          image={image} imageStyle={
            {
              width: null,
              height: 300
            }} >
        <Text style={{marginBottom: 10, textAlign:'center'}}>
          {element.questions.length} Cards
        </Text>

          <Button
            large
            buttonStyle={{margin:10, backgroundColor:'#03A9F4'}}
            icon = {{name: 'plus', type:'font-awesome'}}
            title='Add Card' onPress= {()=>{
              navigate(
                'NewCard',
                { key: key }
              )
            }} />

            <Button
              large
              buttonStyle={{margin:10}}
              icon = {{name: 'question', type:'font-awesome'}}
              title='Start Quiz' onPress = {()=>{
                navigate(
                  'QuizDetail',
                  { key: key }
                );
              }}  />

      </Card>
    );
  }
}

const mapStateToProps = ({decks}) => ({decks});
export default connect(mapStateToProps)(DeckDetail)
