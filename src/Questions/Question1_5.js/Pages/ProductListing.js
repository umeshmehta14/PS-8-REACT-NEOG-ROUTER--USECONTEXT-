import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { DataContext } from '../Contexts/DataContext';
import { CartContext } from '../Contexts/CartContext';


//1. Create an e-commerce App in React with different routes for:
// Product listing page - fakeFetch has been provided. Fetch the data and display on the product listing page.
// cart page
// wish list page
// A 404 page should be displayed when user enters wrong url

// 2. In the above question, in your product listing page add a “Add to Cart” button along with each product. On click of the button, add that item to your cart. The added product should be visible in the My Cart page. Show the total number of items available in the cart at the top of the page. Do this using context.
const ProductListing = () => {
  const {products, loading,error} = useContext(DataContext);
  const {cart, HandleCart} = useContext(CartContext);
  
  return (
    <div>
      <h1>{error && error}</h1>
      <p>{loading && "Loading..."}</p>
      <div>
        {
          products.map((element)=>{
            const {id,name,description,price, quantity, category, brand} = element;
            return <div key={id} style={{border:"2px solid black", margin:"1rem"}}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{price}</p>
              <NavLink to={`/aboutitem/${id}`} >Visit Item</NavLink>

             <p>
               <button onClick={()=>HandleCart(element)}>Add to Cart</button>
              </p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ProductListing
