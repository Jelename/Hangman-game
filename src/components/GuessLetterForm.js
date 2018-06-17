import * as React from 'react'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'

class GuessLetterForm extends React.PureComponent {

  handleChange = (event) => {
    const guess = event.target.guess;

    this.setState({
      guessed: []
    });
  }

  handleSubmit = (event) => {
    this.props.makeGuess(this.props.char)

    if (this.state.name && this.state.description) {
      this.props.addPizza({
        name: this.state.name,
        description: this.state.description,
        ingredients: []
      })
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Make your guess:
          <input type="text" guess="guess" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    guessed: state.guessedLetters
  }
}

export default connect(mapStateToProps, { makeGuess })(GuessLetterForm)
