import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    result: 'heads',
    counter: 0,
    heads: 0,
    tails: 0,
  }

  onClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({result: 'heads'})
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState({result: 'tails'})
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {result, counter, heads, tails} = this.state
    const imageUrl =
      result === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onClick}>
            Toss Coin
          </button>
          <div className="outcomes-container">
            <p className="list">Total:{counter}</p>
            <p className="list">Heads:{heads}</p>
            <p className="list">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
