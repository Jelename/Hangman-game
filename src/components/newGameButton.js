import * as React from 'react'
import { newGame } from '../actions/game'
import { connect } from 'react-redux'
import './newGameButton.css'

class NewGameButton extends React.PureComponent {
  handleClick = () => {
    this.props.newGame()
  }

  render() {
    return (
      <button onClick={this.handleClick} className='btn'>Start new game</button>
    )
  }
}

export default connect(null, { newGame })(NewGameButton)
