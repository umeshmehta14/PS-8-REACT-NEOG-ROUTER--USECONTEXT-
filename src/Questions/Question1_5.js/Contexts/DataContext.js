import { createContext, useState,useEffect } from "react";
import { fakeFetch } from "../Data/FakeFetch";

export const DataContext = createContext();

export const DataProvider = ({children})=>{
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


    const getData = async() =>{
        try {
          const response = await fakeFetch("https://example.com/api/products");
          setProducts(response.data.products);
          setLoading(false);
        } catch (err) {
          setError(`${err.status}:${err.message}`);
          setLoading(false);
        }
      }
    
      useEffect(()=>{
        getData()
      },[]);
    return <DataContext.Provider value={{products, loading,error}}>
        {children}
    </DataContext.Provider>
}