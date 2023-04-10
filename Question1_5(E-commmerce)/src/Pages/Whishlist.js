import React, { useContext } from 'react'
import { WishListContext } from '../Contexts/WishListContext'
import { CartContext } from '../Contexts/CartContext';
import { NavLink } from 'react-router-dom';

const Whishlist = () => {
  const {wishList, HandleWishlist} = useContext(WishListContext);
  const {HandleCart} = useContext(CartContext);
  return (
    <>
    <h1>My Whishlist</h1>
    <h3>{wishList.length > 0 && `Items:${wishList.length}`}</h3>
    <div>

      {
          wishList.map((element)=>{
            const {id,name,description,price} = element;
            return <div key={id} style={{border:"2px solid black", margin:"1rem"}}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{price}</p>
              <NavLink to={`/aboutitem/${id}`} >Visit Item</NavLink>

             <p>
               <button onClick={()=>HandleCart(element)}>Add to Cart</button>
               <button onClick={()=>HandleWishlist(element, true)}>Remove from Wishlist</button>
              </p>
            </div>
          })
        }
    </div>

      
    </>
  )
}

export default Whishlist
