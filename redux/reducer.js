//Single reducer this is just a small application
import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from './actions'

const decks = {
  React: {
    title: 'React',
    cover:'https://cdn-images-1.medium.com/max/1600/1*g6s1lvpfArJGorALkKNhvw.png',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    cover:undefined,
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


export default function entries(state={decks}, action){
  switch (action.type) {
    case ADD_CARD:
    return {
      ...state,
      [action.key]:action.element
    }
    case ADD_DECK:
      return {
        decks:{
          [action.title]:{
            title:action.title,
            cover:undefined,
            questions:[]
          },
          ...state.decks
        }
    }
    default:
      return state
  }
}
