import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Text } from 'react-native-elements';

class QuizDetail extends React.Component {
  state = {
    showQuestion:true,
    questionIndex:0,
    correct:0,
  }

  toogleState = () =>{
    this.setState({
      showQuestion:!this.state.showQuestion
    })
  }

  GoToResults = (key, total, correct) => {
    const { navigate } = this.props.navigation;
    navigate(
      'QuizResults',
      {
        key: key,
        correct:correct,
        total:total,
      }
    );
  }

  NextQuestion = (status) =>{
    const {key} = this.props.navigation.state.params;
    const element = this.props.decks[key];
    const index = this.state.questionIndex;

    if(index<element.questions.length-1){
      this.setState({
        questionIndex:index+1
      })
    }

    if(status === 'correct'){
      this.setState({
        correct:this.state.correct+1
      }, ()=>{
          if(element.questions.length-1===index){
            this.GoToResults(key,element.questions.length,this.state.correct)
          }
      });
    }else{
      if(element.questions.length-1===index){
        this.GoToResults(key,element.questions.length,this.state.correct)
      }
    }
  }



  render() {
    const key = this.props.navigation.state.params.key;
    const element = this.props.decks[key];
    const index = this.state.questionIndex;
    const text = this.state.showQuestion ?
      element.questions[index].question:
      element.questions[index].answer;

    return (
      <Card title={element.title}
          backgroundColor="blue" >
        <Text>
          {`${index+1}/${element.questions.length} \n`}
        </Text>
        <Text style={{marginBottom: 5, textAlign:'center'}} h1>
          {text}
        </Text>

        <Text style={{
              color:"#E27E81",
              textAlign:'center',
              marginBottom: 5,
              fontWeight: 'bold',
              fontSize:16
            }} onPress={()=>{this.toogleState()}}>
          { this.state.showQuestion? "Answer":"Question" }
        </Text>

          <Button
            large
            buttonStyle={{margin:10, backgroundColor:'#008300'}}
            icon = {{name: 'check', type:'font-awesome'}}
            title='Correct' onPress={()=>{this.NextQuestion('correct')}} />

            <Button
              large
              buttonStyle={{margin:10, backgroundColor:'#DD221D'}}
              icon = {{name: 'times', type:'font-awesome'}}
              title='Incorrect' onPress={()=>{this.NextQuestion('incorrect')}} />

      </Card>
    );
  }
}

const mapStateToProps = ({decks}) => ({decks})
export default connect(mapStateToProps)(QuizDetail)
