import React, {useContext} from 'react'
import { DataContext } from '../Contexts/DataContext';


const DisplayTodoItems = ({todoList}) => {
  const { HandleDoneTodo } = useContext(DataContext);
  
  return (
    <div>
      {
          todoList.map((event) =>{
            const {id,title, description, isCompleted} = event;
            return <div key={id} style={{border:"2px solid black"}} >
            <div style={{textDecoration:isCompleted && "line-through"}}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
                <button onClick={()=>HandleDoneTodo(event)}>Mark As Done</button>
              </div>
          })
        }
    </div>
  )
}

export default DisplayTodoItems
