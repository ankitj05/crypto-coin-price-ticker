import React from 'react'
import './App.css';
import PriceState from './context/PriceState'
import GetPrices from './components/GetPrices'
import Footer from './components/Footer';

function App() {
  return (
    <PriceState>
      <Footer />
      <div className="App">
        <h1>Coin Price Tracker</h1>
        <GetPrices />
      </div>
    </PriceState>
  );
}

export default App;
