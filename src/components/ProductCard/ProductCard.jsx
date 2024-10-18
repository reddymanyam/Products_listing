import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const ProductCard = ({cart}) => {
  return (
   <>
     <Box sx={{width:"100%"}}>
     <Typography variant='h5' component="h2" sx={{textAlign:'center', fontWeight:"bold"}}> ProductCart</Typography>
      {
         (cart.length > 0 ) ? (
          cart.map((item) => (


              <Card sx={{ maxWidth: 250, p:1, ml:10 , mb:5 }}>
                  <CardActionArea>
                      <CardMedia
                          component="img"
                          sx={{height:"200px", objectFit: 'cover'}}
                          image={item.image}
                          alt="green iguana"
                          
                      />
                      <CardContent>
                          <Typography gutterBottom variant="body1" component="div">
                             {item.title}
                          </Typography>
                          <Typography gutterBottom variant="body2" component="div">
                            Price: ${item.price}
                          </Typography>
                          <Typography gutterBottom variant="body2" component="div">
                            Rating:{item.rating.rate} Count:{item.rating.count}
                          </Typography>
                         <Button variant='contained' color='warning' >Remove Item</Button>
                          
                      </CardContent>
                  </CardActionArea>
              </Card>) 
          )) : <Typography variant='h6' component="h2"> Your cart is empty</Typography>
}
     </Box>
   </>
  )
}

export default ProductCard