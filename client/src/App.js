import './App.css';
import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import TickerSearchmap from "./components/TickerSearchmap"
import EcoIndicators from "./components/EcoIndicators"
import WatchListmap from "./components/WatchListmap"


const App = () => {
 
  return (
    <div className="App">

      <nav className="navbar">
        <h1>Welcome to TradeView!</h1>
        <div className="links">
          <Link to="/" className="navbarLinks">Home</Link>
          <Link to="/tickersearch" className="navbarLinks">Stock Search</Link>
          <Link to="/indicators" className="navbarLinks">Economic Indicators</Link>
          <Link to="/watchlist" className="navbarLinks">Watchlist</Link>
          <div></div> 
        </div>
      </nav>
      <br />
      <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tickersearch">
              <TickerSearchmap />
          </Route>
          <Route exact path="/indicators">
            <EcoIndicators />
          </Route>
          <Route exact path="/watchlist">
            <WatchListmap />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
