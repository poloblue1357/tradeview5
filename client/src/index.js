import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StockContextProvider } from "./contexts/ContextProvider"
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StockContextProvider>
        <App />
      </StockContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
