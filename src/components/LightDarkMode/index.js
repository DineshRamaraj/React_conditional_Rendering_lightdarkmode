// Write your code here
import {Component} from 'react'
import './index.css'

class MyComponent extends Component {
  state = {whiteMode: true}

  modeChange = () => {
    this.setState(prevMode => ({whiteMode: !prevMode.whiteMode}))
  }

  buttonText = () => {
    const {whiteMode} = this.state
    return whiteMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = this.buttonText()
    const {whiteMode} = this.state

    const cardContainer = whiteMode ? 'light-mode' : 'dark-mode'

    return (
      <div className="app-container">
        <div className={`card-container ${cardContainer}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.modeChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default MyComponent
