import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Home/Home';
import Header from './Home/Header/Header';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider/StateProvider';
import { auth } from './components/Login/firebase';
function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {

        dispatch({
          type: "SET_USER",
          user: null
        });

      }
    });

    return () => {
      unsubscribe();
    }

  },[]);

  console.log("User is >>>>>> ", user);

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
      </Route>
      <Route path="/login">
        <Header/>
        <Login></Login>
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
