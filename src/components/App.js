import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import '../css/App.css';
import Graph from './Graph';
import Home from './Home';
import Table from './Table';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>

      {/* <div className='logo'>
        <a href='/'>
          <img src='/assets/img/logos/cytonn_logo.svg' className='cytonn_logo'/>
        </a>
      </div> */}

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/graph' element={<Graph/>}></Route>
        <Route exact path='/statistics' element={<Table/>}></Route>
      </Routes>

    </Router>
  );
}
