import React,{createContext, useState} from 'react'

export const WishListContext = createContext();
export const WishListProvider = ({children}) => {
  const [wishList, setWishList] = useState([]);
  const HandleWishlist = (item,remove)=>{
    if(remove)
    {
      const itemRemoved = wishList.filter(({id})=> id !== item.id)
      setWishList(itemRemoved);
    }
    else{
      setWishList([...wishList,item])
    }
  }
  return (
    <WishListContext.Provider value={{wishList, HandleWishlist}}>
      {children}
    </WishListContext.Provider>
  )
}


