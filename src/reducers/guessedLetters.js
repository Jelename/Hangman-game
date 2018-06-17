//reducers/guessedLetters

import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = [], action = {}) => {
  switch(action.type) {
  case NEW_GAME:
    return action.payload.guessedLetters
  case MAKE_GUESS:
    return [...state, action.payload.guessedLetter]
  default:
    return state
  }
}
