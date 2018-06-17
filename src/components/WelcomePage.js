import * as React from 'react'
import { Link } from 'react-router-dom'
import './css/welcomePage.css'

export default class WelcomePage extends React.PureComponent {
  render() {
    return (
      <div className='welcome-message'>
        <h1>Welcome to Hangman game!</h1>
        <Link to={ `/hangman` } id="link-style">Start playing...</Link>
      </div>
    )
  }
}
