import React from 'react';
import './Pizza.css';

function PizzaTime(props) {
  const{values,submit,change,errors,disabled} = props

  // let display = 
  // <div className = 'order'>
  // <div>{values.firstName}</div>
  // <div>{values.lastName}</div>
  // <div>{values.crust}</div>
  // <div>{values.toppings}</div>
  // <div>{values.special}</div>
  // </div>;



  const onSubmit = event => {

    event.preventDefault();
    submit()
  }

  const onChange = event => {
    let {name,value} = event.target
    if(event.target === 'checkbox') {
      value = event.target.checked
    }
    change(name,value)
  }

  return(
    <div className = 'Pizza-body'>
      <form className = 'entireForm' onSubmit={onSubmit}>
        <div>
          <label> First Name:
            <input
              value = {values.firstName}
              onChange = {onChange}
              name = 'firstName'
              type = 'text'
            />
          </label>
          <label> Last Name:
            <input 
              value = {values.lastName}
              onChange = {onChange}
              name = 'lastName'
              type = 'text'
            />
          </label>          
        </div>
        <div className ='crustSize'>
          <label> Pick your crust size:
            <select
            onChange = {onChange}
            value = {values.crust}
            name = 'crust'
            >
              <option value = 'select'>--Select--</option>
              <option value = '8in'> 8 inches</option>
              <option value = '10in'> 10 inches</option>
              <option value = '12in'> 12 inches</option>
              <option value = '14in'> 14 inches</option>
            </select>
          </label>          
        </div>
        <label> Pick your toppings:
        <label> Pepperoni
            <input
              name = 'pep'
              type = 'checkbox'
              checked = {values.pep}
              onChange = {onChange}
            />
        </label>
        <label> Sausage
            <input 
              name = 'sausage'
              type = 'checkbox'
              checked = {values.sausage}
              onChange = {onChange}
            />
        </label>
        <label> Mushroom
            <input 
              name = 'mushroom'
              type = 'checkbox'
              checked = {values.mushroom}
              onChange = {onChange}
            />
        </label>
        <label> Green Peppers
            <input 
              name = 'greenPep'
              type = 'checkbox'
              checked = {values.greenPep}
              onChange = {onChange}
            />
        </label>
        </label>
        <div className = 'special'>
        <label> Your special instructions:
          <input 
            name = 'special'
            type = 'text'
            value = {values.special}
            onChange = {onChange}
          />
        </label>
        </div>    
        <button disable = {disabled} className = 'orderButton'>Add to Order</button>
        <div className = 'errors'>
          <div>{errors.firstName}</div>
          <div>{errors.lastName}</div>
          <div>{errors.crust}</div>
          <div>{errors.special}</div>
        </div>

        <div className = 'orderDetails'>
          <h2>{values.firstName} {values.lastName}</h2>
          <p>Your order is: </p>
          <p>{values.crust}</p>
          <p>{values.toppings}</p>
          <p>{values.special}</p>
        </div>
      </form>
    </div>
  )
}

export default PizzaTime