import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";

// Create a Todo App in React with different routes for:

// Summary of Done and Open Todos page - fakeFetch has been provided. List all the Todos on this page.
// Done Todos page
// Open Todos page
// Page for Individual Todos item to show details of each Todo.



const Todos = () => {
  const {todoList,loading,error} = useContext(DataContext);


  return (
    <div>
      <h1>{error && error}</h1>
      <p>{loading && "Loading..."}</p>
      <div>
        {
          todoList.map(({id,title, description, isCompleted}) =>{
            return <div key={id} style={{border:"2px solid black"}}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status:{isCompleted ?"Done":"Not Done"}</p>
              <NavLink to={`/expandtodo/${id}`}>Expand Todo</NavLink>
            </div>
          })
        }
      </div>
      
    </div>
  );
};

export default Todos;
