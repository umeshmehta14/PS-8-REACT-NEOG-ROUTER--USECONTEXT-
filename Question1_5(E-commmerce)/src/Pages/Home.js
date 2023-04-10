import React, { useContext } from 'react'

import {Routes, Route} from "react-router-dom";
import ProductListing from './ProductListing';
import Cart from './Cart';
import Whishlist from './Whishlist';
import AboutItem from '../Components/AboutItem';
import Navbar from '../Components/Navbar';
import { DataContext } from '../Contexts/DataContext';


const Home = () => {
  const {error} = useContext(DataContext);
  return (
    <div>
      {!error && <Navbar/>}
      <div>
        <Routes>
            <Route path="/" element={<ProductListing/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/whishlist" element={<Whishlist/>}/>
            <Route path="/aboutitem/:productId" element={<AboutItem/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Home
