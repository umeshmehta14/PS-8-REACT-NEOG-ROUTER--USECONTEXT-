import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { DataContext } from "../Contexts/DataContext";
import { CartContext } from "../Contexts/CartContext";
import { WishListContext } from "../Contexts/WishListContext";
import AddWishlistBtn from "../Components/AddWishlistBtn";

//1. Create an e-commerce App in React with different routes for:
// Product listing page - fakeFetch has been provided. Fetch the data and display on the product listing page.
// cart page
// wish list page
// A 404 page should be displayed when user enters wrong url

// 2. In the above question, in your product listing page add a “Add to Cart” button along with each product. On click of the button, add that item to your cart. The added product should be visible in the My Cart page. Show the total number of items available in the cart at the top of the page. Do this using context.

//3. In the question above, add a “Remove from cart” button in the My Cart page for each product. On click of this button, the product should be removed from the cart.

//4. In the above question, in your product listing page add a “Add to Wishlist” button along with each product. On click of the button, add that item to your Wishlist page. The added product should be visible in the My Wishlist page. Show the total number of items available in the Wishlist at the top of the page. Do this using context.


const ProductListing = () => {
  const { products, loading, error } = useContext(DataContext);
  const { HandleCart } = useContext(CartContext);
  const { HandleWishlist } = useContext(WishListContext);
  


  return (
    <div>
      <h1>{error && error}</h1>
      <p>{loading && "Loading..."}</p>
      <div>
        {products.map((element) => {
          const { id, name, description, price } =
            element;
          return (
            <div key={id} style={{ border: "2px solid black", margin: "1rem" }}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{price}</p>
              <NavLink to={`/aboutitem/${id}`}>Visit Item</NavLink>

              <p>
                <button onClick={() => HandleCart(element)}>Add to Cart</button>
                <AddWishlistBtn element={element} HandleWishlist={HandleWishlist} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
