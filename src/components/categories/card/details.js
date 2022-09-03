import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "../../categories/mainPage.css"

export default function MultiActionAreaCard({dataUse}) {

    const {Name_Product,category,description,images,thumbnail,price}=dataUse

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Name_Product}
          </Typography>
          <ul className='element-custom'>

            <li>
                <div className='element-icon'>
                    <span style={{fontWeight:"bold" }}>Category:</span>{category} 

                    <span  style={{fontWeight:"bold" }}>Description:</span>{description}
                </div>
            </li>
                
            <li>
                <div className='element-icon'>
                        <span style={{fontWeight:"bold"}}>price:</span>{price}
                       
                </div>
            </li>

          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}