import * as React from 'react'
import { connect } from 'react-redux'
import * as game from '../lib/game'
import GuessLetterForm from './GuessLetterForm'
//import { newGame, makeGuess } from '../actions/game'

class Hangman extends React.PureComponent {
  render() {
    const showGuess = game.showGuess(this.props.wordToGuess, this.props.guessed);
    console.log(this.props.wordToGuess)

    return (
      <div id="screen">
        <h3>Guess the word:</h3>
        <p>{showGuess}</p>
        <GuessLetterForm />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    wordToGuess: state.wordToGuess,
    guessed: state.guessedLetters
  }
}

export default connect(mapStateToProps)(Hangman)
