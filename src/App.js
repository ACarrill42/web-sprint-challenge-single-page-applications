import React, {useState, useEffect} from "react";
import Pizza from './Pizza';
import * as yup from 'yup';
import axios from 'axios';
import {Route, Link, Switch, useHistory} from 'react-router-dom';
import './App.css';
import FormSchema from "./Schema";

const initialFormValues = {
  firstName: '',
  lastName: '',
  special: '',
  pep: false,
  sausage: false,
  mushroom: false,
  greenPep: false
};

const initialFormErrors = {
  firstName: '',
  lastName: '',
  special: ''
};

const buttonValidation = true;
const infoShowUp = [];


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
  const[formValues, setFormValues] = (initialFormValues)
  const[formErrors, setFormErrors] = (initialFormErrors)
  const[info, setInfo] = (infoShowUp)
  const[disabled, setDisabled] = (buttonValidation)

  const inputChange = (name,value) => {
    yup.reach(FormSchema, name)
      .validate(value)
      .then(res => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
      setFormValues({...formValues, [name]: value});
  }

  const postInfo = newInfo => {
    axios.post('https://reqres.in', newInfo)
    .then(res => {
      console.log(res.data)
      setInfo([...info,res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    });
  };

  const formSubmittion =() => {
    const newInformation = {
      firstName: formValues.name.trim(),
      lastName: formValues.name.trim(),
      special: formValues.special.trim()
    }
    postInfo(newInformation)
  }

  useEffect(() => {
    FormSchema.isValid(formValues)
      .then(isValid => {
        setDisabled(!isValid)
      })
  }, [formValues])

  return (
    <div className = 'App'>
        <nav className = 'App-link'>
          <Link to = '/'>Home</Link>
          <Link to = '/help'>Help</Link>
        </nav>

        <Route exact path = '/pizza'>
          <Pizza 
            values={formValues}
            change={inputChange}
            submit={formSubmittion}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>  
        <Route exact path = '/'>
          <Home/>  
        </Route>    
    </div>
  );
};
export default App;
