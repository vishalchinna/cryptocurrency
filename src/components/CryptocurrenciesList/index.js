import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({cryptoData: updateData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    console.log(cryptoData)
    return (
      <div className="box-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="logo"
            />
            <div className="item-container">
              <div className="nav-box">
                <p className="para">Coin Type</p>
                <div className="currency">
                  <p className="para">USD</p>
                  <p className="para1">EURO</p>
                </div>
              </div>
              {cryptoData.map(each => (
                <CryptocurrencyItem key={each.id} currencyList={each} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
