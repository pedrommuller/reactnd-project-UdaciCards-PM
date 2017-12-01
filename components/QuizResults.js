import React from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

export default class QuizResults extends React.Component {
  render() {
    const { key, correct, total } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    return (
      <Card title="Your Quiz resuls">
        <Text h4>
          These are your results:
        </Text>
        <Text>
          Total correct answers: {correct} of {total}
        </Text>

        <Button
          large
          buttonStyle={{margin:10, backgroundColor:'#03A9F4'}}
          icon = {{name: 'check', type:'font-awesome'}}
          title='Restart Quiz' onPress={()=>{ navigate('QuizDetail',{key:key}) }}
        />

        <Button
          large
          buttonStyle={{margin:10}}
          icon = {{name: 'check', type:'font-awesome'}}
          title='Back to Deck' onPress={()=>{ navigate('EntryDetail',{key:key}) }}
        />
      </Card>
    );
  }
}
