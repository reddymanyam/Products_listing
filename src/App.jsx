import { Typography } from '@mui/material'
import React from 'react'
import ProductListing from './components/ProductListing/ProductListing'
import ProductCard from './components/ProductCard/ProductCard'

const App = () => {
  const [lists, setLists] = useState([]);

    const getData = async() =>{
        try{
       const response =  await axios.get("https://fakestoreapi.com/products");
        setLists(response.data)
              
        }
        catch{(err) => alert(`https://www.error is, ${err}`)

        }
    }
    useEffect(()=>{
      getData();
    },[])
  return (
     <>
        <Box>
          <ProductListing />
          <ProductCard />
        </Box>
     </>
  )
}

export default App