import React from 'react'
import './App.scss';
import Navb from './comps/Navb';
import Header from './comps/Header'
import Submain from './comps/Submain';
import Service from './comps/Service';
import Customers from './comps/Customers';
function App() {
  return (
    <div >
    <Navb/>
    <Header/>
    <Submain/>
    <Service/>
    <Customers/>
    </div>
    
  );
}

export default App;
