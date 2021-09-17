import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/main.css'
import Home from './components/Home.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

