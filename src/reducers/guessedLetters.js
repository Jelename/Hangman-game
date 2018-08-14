import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = [], action = {}) => {
  switch(action.type) {
  case NEW_GAME:
    return action.payload.guessedLetters
  case MAKE_GUESS:
    return [...state, action.payload.guessedLetter] //this is returning current state, lets say 'a', and action.payload.guessedLetter 'b'
                                             //result => ['a', 'b']
  default:
    return state//this is returning current state -> []
  }
}
