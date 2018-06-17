import * as React from 'react'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'

class GuessLetterForm extends React.PureComponent {

  handleSubmit = (e) => {
    e.preventDefault();
    const [input] = e.target.children
    this.props.makeGuess(input.value)
    input.value = ""
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        Make your guess: <input type="text"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
  }
}

export default connect(null, { makeGuess })(GuessLetterForm)
