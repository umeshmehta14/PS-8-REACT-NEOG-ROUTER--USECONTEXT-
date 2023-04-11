import { createContext, useState,useEffect } from "react";
import { fakeFetch } from "../Data/FakeFetch";

export const DataContext = createContext();

export const DataProvider = ({children})=>{
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


    const getData = async() =>{
        try {
          const response = await fakeFetch("https://example.com/api/todos");
          setTodoList(response.data.todos);
          setLoading(false);
        } catch (err) {
          setError(`${err.status}:${err.message}`);
          setLoading(false);
        }
      }

      const HandleDoneTodo = (item) =>{
        const updatedTodo = todoList.map((currElement)=> currElement.id === item.id ? {...currElement, isCompleted: true} : currElement);
        setTodoList(updatedTodo);
      }
    
      useEffect(()=>{
        getData()
      },[]);
    return <DataContext.Provider value={{todoList, loading,error, HandleDoneTodo}}>
        {children}
    </DataContext.Provider>
}