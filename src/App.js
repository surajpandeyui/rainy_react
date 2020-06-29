import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Banner from './components/slider/Banner';
import Home from './components/pages/home/Home';
import './components/pages/home/home.css';
import './assets/css/style.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
