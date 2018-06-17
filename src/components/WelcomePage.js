import * as React from 'react'
import { Link } from 'react-router-dom'

export default class WelcomePage extends React.PureComponent {
  render() {
    return (
      <div className='welcome-message'>
        <h1>Welcome to Hangman game!</h1>
        <p><Link to={ `/hangman` }>Start playing</Link></p>
      </div>
    )
  }
}
