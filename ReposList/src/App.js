import React, { Component } from 'react';
import Header from './Componets/Header';
import "./styles.css"
import api from './services/api';
import Main from './pages/main';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

export default App;