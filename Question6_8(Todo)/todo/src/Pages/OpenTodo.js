import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataContext'
import { NavLink } from 'react-router-dom';

const OpenTodo = () => {
  const {todoList} = useContext(DataContext);
  const openTodos = todoList.filter(({isCompleted})=> !isCompleted)
  return (<>
  <h1>Open Todos</h1>
  <h3>Total Todos:{openTodos.length}</h3>
    <div>
    {
          openTodos.map(({id,title, description, isCompleted}) =>{
            return <div key={id} style={{border:"2px solid black"}}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status:{isCompleted ?"Done":"Not Done"}</p>
              <NavLink to={`/expandtodo/${id}`}>Expand Todo</NavLink>

            </div>
        })
      }
    </div>
  </>
  )
}

export default OpenTodo
