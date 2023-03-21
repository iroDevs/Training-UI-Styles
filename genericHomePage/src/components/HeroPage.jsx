import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Typography } from '@mui/material';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='title-heroPage'>
            <Typography variant="h2" component="h3">
            Ofertas Esclusivas Apenas aqui
            </Typography>
            <p>Apenas proporcionamos os melhores momentos para as melhores pessoas</p>
        </div>
        <img
          className="d-block w-100 img-carrossel"
          src="https://i0.wp.com/img.fciencias.com/uploads/2014/10/Paisagens-Wallpaper-4.jpg?fit=2560%2C1440&ssl=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <div className='title-heroPage'>
            <Typography variant="h2" component="h3">
            Ofertas Esclusivas Apenas aqui
            </Typography>
            <p>Apenas proporcionamos os melhores momentos para as melhores pessoas</p>
        </div>
        <img
          className="d-block w-100 img-carrossel"
          src="https://images8.alphacoders.com/388/388531.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <div className='title-heroPage'>
            <Typography variant="h2" component="h3">
            Ofertas Esclusivas Apenas aqui
            </Typography>
            <p>Apenas proporcionamos os melhores momentos para as melhores pessoas</p>
        </div>
        <img
          className="d-block w-100 img-carrossel"
          src="https://images5.alphacoders.com/432/432951.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;