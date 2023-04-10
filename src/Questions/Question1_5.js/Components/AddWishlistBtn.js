import React,{useState} from 'react'

const AddWishlistBtn = ({element,HandleWishlist}) => {
    const [click, setClick] = useState(false);
    return (
      <button
        disabled={click}
        onClick={() => {
          setClick(true);
          HandleWishlist(element);
          
        }}
      >{click ?"Added to Wishlist":"Add to Wishlist"}</button>
    );
  };

export default AddWishlistBtn
