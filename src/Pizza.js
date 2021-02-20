import React from 'react';

function PizzaTime() {

  return(
    <form>
      <label> First Name:
        <input
          name='firstName'
          type='text'
        />
      </label>
      <label> Last Name:
        <input 
          name='lastName'
          type='text'
        />
      </label>
      <label> Pick your crust size:
        <select>
          <option value = 'select'>--Select--</option>
          <option value = '8in'> 8 inches</option>
          <option value = '10in'> 10 inches</option>
          <option value = '12in'> 12 inches</option>
          <option value = '14in'> 14 inches</option>
        </select>
      </label>
      <label> Pick your toppings:
        <label> Pepperoni
            <input
              name = 'pep'
              type = 'checkbox'
            />
        </label>
        <label> Sausage
            <input 
              name = 'sausage'
              type = 'checkbox'
            />
        </label>
        <label> Mushroom
            <input 
              name = 'mushroom'
              type = 'checkbox'
            />
        </label>
        <label> Green Peppers
            <input 
              name = 'greenPep'
              type = 'checkbox'
            />
        </label>
      </label>
    </form>
  )
}

export default PizzaTime