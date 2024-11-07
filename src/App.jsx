import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductListing from './components/ProductListing/ProductListing'
import ProductCard from './components/ProductCard/ProductCard'
import axios from 'axios'

const App = () => {
  const [lists, setLists] = useState([]);
  const [cart, setCart] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setLists(response.data)
    }
    catch {
      (err) => alert(`https://www.error is, ${err}`)
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <Box sx={{ display: "flex", Width: "100%", justifyContent: "space-between" }}>
        <Box sx={{ border: '1px solid black', height: "auto", width: "40%", margin: '50px' }}>
          <ProductListing lists={lists} setCart={setCart}/>
        </Box>
        <Box sx={{ border: '1px solid black', height: "auto", width: "40%", margin: "50px" }}>
          <ProductCard cart={cart} />
        </Box>
      </Box>
    </>
  )
}

export default App