import { combineReducers } from 'redux'
import wordToGuess from './wordToGuess'
import guessedLetters from './guessedLetters'


export default combineReducers({
  wordToGuess,
  guessedLetters
})
