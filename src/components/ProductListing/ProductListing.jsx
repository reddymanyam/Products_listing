import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const ProductListing = ({ lists, setCart }) => {

    const addToCart = (product) =>{
        setCart((prevItem) => [...prevItem, product]);
      };
    return (
        <>
            <Box sx={{ width: "100%" }}>
            <Typography variant='h5' component="h2" sx={{textAlign:'center', fontWeight:"bold"}}> ProductListing</Typography>
                {
                    lists.map((item) => (


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
                                   <Button variant='contained' color='warning' onClick={() => addToCart(item)}>Add TO Cart</Button>
                                    
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </>
    )
}

export default ProductListing