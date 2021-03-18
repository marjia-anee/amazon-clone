import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router';
import { auth } from './firebase';


const Login = () => {
      const history = useHistory();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');


      const login = (event) => {
            event.preventDefault();

            auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                  history.push("/");
            })
            .catch(e=> alert(e.message));
      }

     


      const register = (event) => {
            event.preventDefault();

            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                  history.push("/");

            })
            .catch(e=> alert(e.message));
      }

      return (
            <div className="login">
                  <div className="login__container">
                        <h1>Sign in</h1>
                        <form>
                              <h5>E-mail</h5>
                              <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                              <h5>Password</h5>
                              <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                              <button onClick={login} type="submit" className = "login__signInButton">Sign in</button>
                        </form>

                        <p>
                              By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our cookies Notice and our interest-based Ads notice.
                        </p>
                        <button onClick = {register} className = "login__registerButton">Create your Amazon Account</button>
                  </div>
            </div>
      );
};

export default Login;