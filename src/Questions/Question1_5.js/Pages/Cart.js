import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

const Cart = () => {
  const {cart} = useContext(CartContext);
  return (<>
  <h1>{cart.length === 0 ?"Please Add Some Products To Your Cart ": `Items:${cart.length}`}</h1>
    <div>
    {
          cart.map((element)=>{
            const {id,name,description,price, quantity, category, brand} = element;
            return <div key={id} style={{border:"2px solid black", margin:"1rem"}}>
              <h3>Name:{name}</h3>
              <p>Desciption:{description}</p>
              <p>Price:{price}</p>
              <p>Quantity:{quantity}</p>
              <p>Category:{category}</p>
              <p>Brand:{brand}</p>
            </div>
          })
        }
    </div>
    <h2>{cart.length > 0 &&  `Total Price:${cart.reduce((acc, {price})=> acc+= price,0)}`}</h2>
      </>
  )
}

export default Cart
