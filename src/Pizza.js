import React from 'react';
import './Pizza.css';

function PizzaTime() {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("success, did not reload");
  }

  return(
    <div className = 'Pizza-body'>
      <div>
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
        </form>
      </div>

      <div className ='crustSize'>
        <form>
          <label> Pick your crust size:
            <select>
              <option value = 'select'>--Select--</option>
              <option value = '8in'> 8 inches</option>
              <option value = '10in'> 10 inches</option>
              <option value = '12in'> 12 inches</option>
              <option value = '14in'> 14 inches</option>
            </select>
          </label>          
        </form>
      </div>
    <form>
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

    <div className = 'spcial'>
      <form>
          <label> Your special instructions:
            <input 
              name = 'special'
              type = 'text'
            />
          </label>
      </form>
    </div>    

    <button onClick = {onSubmit}>Add to Order</button>

    </div>
  )
}

export default PizzaTime