import * as React from 'react'
import { connect } from 'react-redux'
import * as game from '../lib/game'
import GuessLetterForm from './GuessLetterForm'
import NewGameButton from './NewGameButton'
import './css/hangman.css'

class Hangman extends React.PureComponent {
  render() {
    const showGuess = game.showGuess(this.props.wordToGuess, this.props.guessed);
    //console.log(this.props.wordToGuess)
    const wrongGuessCount = game.wrongGuessCount(this.props.wordToGuess, this.props.guessed)
    const isWinner = game.isWinner(this.props.wordToGuess, this.props.guessed)
    const gameFinished = game.gameFinished(this.props.wordToGuess, this.props.guessed)

    return (
      <div id="hangman-game">
        <NewGameButton />
        <h3 className='title'>Guess the word:</h3>
        <p className='word_to_guess'>{showGuess}</p>
        <GuessLetterForm />
        <h5>Number of wrong guesses: <span id="wrong-guess">{wrongGuessCount} / 6</span></h5>
        {isWinner && <p className='winner'>You won this game! Celebrate!</p>}
        {gameFinished && !isWinner && <p className='loser'>You lost! Be better next time</p>}
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
