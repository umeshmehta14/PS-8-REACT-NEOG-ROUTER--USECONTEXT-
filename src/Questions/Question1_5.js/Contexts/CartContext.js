import React,{createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const HandleCart = (item)=>{
        setCart([...cart, item])
    }
  return (
    <CartContext.Provider value={{cart, HandleCart}}>
      {children}
    </CartContext.Provider>
  )
}

