import React, {useState, useEffect} from "react";
import Pizza from './Pizza';
import * as yup from 'yup';
import axios from 'axios';
import {Route, Link, useHistory} from 'react-router-dom';
import './App.css';
import FormSchema from "./Schema";
import PizzaTime from "./Pizza";

const initialFormValues = {
  firstName: '',
  lastName: '',
  special: '',
  crust: '',
  pep: false,
  sausage: false,
  mushroom: false,
  greenPep: false
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  crust: '',
  special: ''
};

const buttonValidation = 'true';
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
  const[formValues, setFormValues] = useState(initialFormValues)
  const[formErrors, setFormErrors] = useState(initialFormErrors)
  const[info, setInfo] = useState(infoShowUp)
  const[disabled, setDisabled] = useState(buttonValidation)

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
    axios.post('https://reqres.in/api/users', newInfo)
    .then(res => {
      console.log(res.data)
      setInfo([...info,res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    });
  };

  const formSubmittion = () => {
    const newInformation = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      special: formValues.special.trim(),
      crust: formValues.crust.trim(),
      toppings:['pep', 'sausage', 'mushroom','greenPep'].filter(top => !!formValues[top])
    }
    postInfo(newInformation)
  }

  useEffect(() => {
    FormSchema.isValid(formValues)
      .then(isValid => {
        setDisabled(!isValid)
      })
  }, [formValues]);

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
