import { useState, useEffect } from "react";

function App() {
  // Coin Tracker practice
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const onChange = (event) => {
    setMoney(event.target.value);
  };
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false);
      });
  }, [])

  return (
    <div>
      <h1>The Coins Tracker!</h1>
        <hr />
        {/* // 코드챌린지
        // 내가 가진 달러로 얼마만큼의 coin을 살 수 있을까? */}
        <label>USD $
        <input
          placeholder="input your money"
          onChange={onChange}
          type="number"
          value={money}
        /> 
        　→ </label>
         <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): You Can Buy {Math.round(money / coin.quotes.USD.price)}
            </option>
          ))}
         </select>
    </div>
  )
};

export default App;