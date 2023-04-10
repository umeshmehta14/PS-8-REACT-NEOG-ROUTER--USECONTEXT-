import React ,{useContext}from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from '../Contexts/DataContext';

const AboutItem = () => {
  const {products} = useContext(DataContext);
  const {productId} = useParams();
    const SelectedItem = products.find(({id})=> id === parseInt(productId));
    const Details = Object.entries(SelectedItem);
  return (
    <div>
        {
            Details.map(([key,value],i)=>{
                return (i===0 ?"":<p key={i}>{key} : {value}</p>)
            })
        }
    </div>
  )
}

export default AboutItem
