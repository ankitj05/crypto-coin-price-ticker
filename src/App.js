import React from 'react'
import './App.css';
import PriceState from './context/PriceState'
import GetPrices from './components/GetPrices'

function App() {
  return (
    <PriceState>
      <div className="App">
        <h1>Coin Price Tracker</h1>
        <GetPrices />
      </div>
    </PriceState>
  );
}

export default App;
