// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {bal: 2000}

  cashBtm = val => {
    this.setState(prevState => ({
      bal: prevState.bal - val,
    }))
  }

  render() {
    const {bal} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div>
        <div className="app-container">
          <div className="card">
            <div className="s-card">
              <div className="s-logo">
                <p className="s-letter">{initial}</p>
              </div>
              <h1 className="s-heading">{name}</h1>
            </div>

            <div className="balance-card">
              <p className="balance">Your Balance</p>
              <p className="balance-p">
                {bal}
                <br />
                <span className="p">In Rupees</span>
              </p>
            </div>

            <p className="with-draw">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>

            <ul className="b-card1">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  cash={eachDenomination}
                  cashBtm={this.cashBtm}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
