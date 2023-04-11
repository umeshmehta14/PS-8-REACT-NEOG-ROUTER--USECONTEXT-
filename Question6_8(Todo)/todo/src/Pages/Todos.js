import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import DisplayTodoItems from "../Components/DisplayTodoItems";

//6. Create a Todo App in React with different routes for:

// Summary of Done and Open Todos page - fakeFetch has been provided. List all the Todos on this page.
// Done Todos page
// Open Todos page
// Page for Individual Todos item to show details of each Todo.

//  7. In the question above, add a Mark as Done button to each todo. Then do the following using context:

// On click of the button, add that todo to the Done Todos page.
// Show the total number of Todos done on top of the Done Todos pages.
// In the Summary page, strike through that todo.

const Todos = () => {
  const {todoList,loading,error} = useContext(DataContext);
  

  return (
    <div>
      <h1>{error && error}</h1>
      <p>{loading && "Loading..."}</p>
      <div>
        <DisplayTodoItems todoList={todoList}/>
      </div>
      
    </div>
  );
};

export default Todos;
