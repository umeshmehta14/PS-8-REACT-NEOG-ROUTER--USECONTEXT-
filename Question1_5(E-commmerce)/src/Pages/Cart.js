import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'

const Cart = () => {
  const {cart,HandleCart} = useContext(CartContext);
  return (<>
  <h1>My Cart</h1>
  <h3>{cart.length === 0 ?"Please Add Some Products To Your Cart ": `Items:${cart.length}`}</h3>
    <div>
    {
          cart.map((element)=>{
            const {id,name,description,price, quantity, category, brand, Selected} = element;
            return <div key={id} style={{border:"2px solid black", margin:"1rem"}}>
              <h3>Name:{name}</h3>
              <p>Desciption:{description}</p>
              <p>Price:{price}</p>
              <p>Quantity:{quantity}</p>
              <p>Category:{category}</p>
              <p>Brand:{brand}</p>
              <small>x{Selected}</small>
            <p>
              <button onClick={() => HandleCart(element)}>+</button>
              <button onClick={() => HandleCart(element, true)}>-</button>
              <p>
                {Selected > 1 && (
                  <button onClick={()=>HandleCart(element,"remove") }>Remove From Cart</button>
                )}{" "}
              </p>
            </p>
              
            </div>
          })
        }
    </div>
    <h2>{cart.length > 0 &&  `Total Price:${cart.reduce((acc, {price,Selected})=> acc+= price *Selected ,0)}`}</h2>
      </>
  )
}

export default Cart
