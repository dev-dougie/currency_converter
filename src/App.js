import React from 'react';
import Conversor from './Components/Conversor'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className = 'row'>
      <Conversor moedaA = 'USD' moedaB = 'BRL'></Conversor><br/>
      <Conversor moedaA = 'USDT' moedaB = 'BRL'></Conversor><br/>
      <Conversor moedaA = 'CAD' moedaB = 'BRL'></Conversor><br/>
      <Conversor moedaA = 'EUR' moedaB = 'BRL'></Conversor><br/>
      </div>
      <h1>Criptomoedas/ativos</h1>
      <div className = 'row'>
      <Conversor moedaA = 'BTC' moedaB = 'BRL'></Conversor>
      <Conversor moedaA = 'LTC' moedaB = 'BRL'></Conversor>
      <Conversor moedaA = 'ETH' moedaB = 'BRL'></Conversor>
      <Conversor moedaA = 'XRP' moedaB = 'BRL'></Conversor>
      </div>
    </div>
  );
}

export default App;
