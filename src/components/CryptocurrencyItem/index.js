import './index.css'

const CryptocurrencyItem = prop => {
  const {currencyList} = prop
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyList
  return (
    <li className="item-list">
      <div className="coin-name">
        <img src={currencyLogo} alt={currencyName} className="coin-logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="currency-info">
        <p className="name">{usdValue}</p>
        <p className="name1">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
