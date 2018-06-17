//reducers/wordToGuess

import { randomWord } from '../lib/game'
import { NEW_GAME } from '../actions/game'

export default (state = randomWord(), action = {}) => {
  switch(action.type) {
    case NEW_GAME:
      return action.payload.word
    default:
      return state
  }
}


// 5. The reducers should not modify the state.
// The functions should create copies of objects and arrays
// before changing them. They should be pure functions.
