import React from 'react'

import Card from '@mui/material/Card';
import Card_header from './header';
import Card_image from './image';
import Card_footer from './footer';





function Card_Catagory_page({dataCard}) {
  
    return (
      <Card sx={{ maxWidth: 345 }} className="card-container">
        <Card_image imagespostes={dataCard.thumbnail}/>
        <Card_header dataCard={dataCard}/>
        <Card_footer dataCard={dataCard}/>
      </Card>
    );
  }

export default Card_Catagory_page