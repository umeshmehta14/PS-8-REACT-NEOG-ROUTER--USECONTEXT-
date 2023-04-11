import React,{createContext, useEffect, useState} from 'react'
import { fakeFetch } from '../Data/Data';
export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = async() =>{
        try {
            const response = await fakeFetch("https://example.com/api/questions");
            setData(response.data.questions)
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <DataContext.Provider value={{data, loading}}>
      {children}
    </DataContext.Provider>
  )
}


