import React from "react";
import Pizza from './Pizza';
import {Route, Link, Switch, useHistory} from 'react-router-dom';
import './App.css';



function Home() {

  const history = useHistory();

  function nextPage() {
    return(
      history.push('/pizza')
    )
  }  
  return(
      <div className = 'App-header'>
        <div className = 'body-container'>
          <h1>Lambda Eats</h1>
          <p>Want soma pizza???</p>
            <button onClick ={nextPage}>Pizza?</button>
        </div>                 
      </div>

  )
}

function App() {

  return (
    <div className = 'App'>
        <nav className = 'App-link'>
          <Link to = '/'>Home</Link>
          <Link to = '/help'>Help</Link>
        </nav>

        <Route exact path = '/pizza'>
          <Pizza />
        </Route>  
        <Route exact path = '/'>
          <Home/>  
        </Route>    
    </div>
  );
};
export default App;
