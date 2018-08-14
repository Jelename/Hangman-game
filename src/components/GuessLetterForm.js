import * as React from 'react'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'
import './css/guessLetterForm.css'

class GuessLetterForm extends React.PureComponent {

  handleSubmit = (e) => {
    e.preventDefault()
    const [input] = e.target.children//check this one why children (he used e.target.value)
    this.props.makeGuess(input.value)
    input.value = ""
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} id="form">
        Make your guess: <input type="text" id="user-input"/>
        <input type="submit" value="Submit" id="submit"/>
      </form>
    </div>
  )
  }
}

export default connect(null, { makeGuess })(GuessLetterForm)
