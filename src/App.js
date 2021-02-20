import React from "react";
import Pizza from './Pizza';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className = 'App'>
      <div className = 'App-header'>
        <nav className = 'App-link'>
          <Link to = '/'>Home</Link>
          <Link to = '/help'>Help</Link>
        </nav>

        <div className = 'body-container'>
          <h1>Lambda Eats</h1>
          <p>Want soma pizza???</p>
          <Link to = '/pizza' >
            <button>Pizza?</button>
          </Link>
        </div>                 
      </div>
            <Route exact path = '/pizza'>
              <Pizza />
            </Route>      
    </div>
  );
};
export default App;
