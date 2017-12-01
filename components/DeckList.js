import React from 'react';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class DeckList extends React.Component {
  render() {
    console.log(this.props);
    const decks = this.props.decks;
    const { navigate } = this.props.navigation;
    return (
        <List containerStyle={{marginBottom: 20}}>
          {
            Object.keys(decks).map((item, index)=>(
              <ListItem key={index}
                title={decks[item].title}
                subtitle = {`${decks[item].questions.length} cards`}
                leftIcon = {{name:"list"}}
                onPress = {()=>{
                  navigate(
                    'EntryDetail',
                    { key: item }
                  );
                }} />
            ))
          }
        </List>
    );
  }
}

const mapStateToProps = ({decks}) => ({decks});
export default connect(mapStateToProps)(DeckList);
