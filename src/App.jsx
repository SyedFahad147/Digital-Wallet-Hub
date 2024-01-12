import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Coin from './Components/Coin';
import CoinDetails from './Components/CoinDetails';
import Exchanges from './Components/Exchanges';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/coin' Component={Coin} />
        <Route path='/exchanges' Component={Exchanges} />
        <Route path='/coin/:id' Component={CoinDetails} />
      </Routes>     
      <Footer /> 
    </>
  );
}

export default App;
