import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout">
        <h1>Checkout</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    
      </Switch>
    </div> 
    </Router>
  );
}

export default App;
