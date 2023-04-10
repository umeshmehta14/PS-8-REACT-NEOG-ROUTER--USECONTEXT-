import React,{createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const CheckSelected = (item) => {
        return item.filter((curElement) => curElement.Selected !== 0);
      };
    
      const HandleCart = (item, decrease) => {
        if (decrease === "remove") {
          const removedItemArray = cart.filter(({ id }) => id !== item.id);
          setCart(removedItemArray);
        } else {
        // setCart([...cart, item])

          const existingItem = cart.find(({ id }) => id === item.id);
          if (existingItem) {
            // If the item is already in the cart, update its quantity
            const addSelected = cart.map((cartItem) =>
              cartItem.id === item.id
                ? decrease
                  ? { ...cartItem, Selected: cartItem.Selected - 1 }
                  : { ...cartItem, Selected: (cartItem.Selected || 1) + 1 }
                : cartItem
            );
    
            const updatedItems = CheckSelected(addSelected);
    
            setCart(updatedItems);
          } else {
            item["Selected"] = 1;
            setCart([...cart, item]);
          }
        }
      };
  return (
    <CartContext.Provider value={{cart, HandleCart}}>
      {children}
    </CartContext.Provider>
  )
}

