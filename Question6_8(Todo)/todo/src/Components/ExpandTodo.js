import React ,{useContext}from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from '../Contexts/DataContext';

const ExpandTodo = () => {
  const {todoList} = useContext(DataContext);
  const {todoId} = useParams();
    const SelectedItem = todoList.find(({id})=> id === parseInt(todoId));
  return (
    <>
    <h1>Todo Description</h1>
    <div>
        {<>
          <h2>Title:{SelectedItem.title}</h2>
          <p> <strong>Decription</strong>:{SelectedItem.description} </p>
          <p> <strong>Status</strong>:{SelectedItem.isCompleted ?"Done":"Not Done"} </p>
        </>
        }
    </div>
        </>
  )
}

export default ExpandTodo
