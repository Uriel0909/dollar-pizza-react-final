import React from 'react';
// import Navbar from './components/navbar';
import Navbar from './components/navbar';
import Pizza from './components/pizza';
import Menu from './components/menu';
import Footer from './components/Footer';
import './App.css';

function App() {
  return(

    <div className="App">
      <Navbar/>
      <Pizza/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
