import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataContext'
import { NavLink } from 'react-router-dom';

const Questions = () => {
    const {data} = useContext(DataContext);
  return (
    <div>
        {
            data.map(({id ,question})=> {
                return <div key={id} style={{border:"2px solid black", margin:"1rem"}}>
                <h2>{question}</h2>
                    <NavLink to="/">UpVote</NavLink>
                    <NavLink to="/">DownVote</NavLink>
                    <NavLink to={`/answer/${id}`}>Answer</NavLink>
                </div>
            })
        }
      
    </div>
  )
}

export default Questions
