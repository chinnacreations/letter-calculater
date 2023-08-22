import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  InputPhrase = event => {
    const {value} = event.target

    this.setState({inputText: value})
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="bg-con">
        <div className="card-con">
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
          <div className="text-con">
            <h1 className="heading">Calculate the letters you enter</h1>
            <label htmlFor="text" className="desc">
              Enter the phrase
            </label>
            <input
              className="input"
              id="text"
              type="text"
              placeholder="Enter the phrase"
              value={inputText}
              onChange={this.InputPhrase}
            />
            <p className="btn">No.of letters: {inputText.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
