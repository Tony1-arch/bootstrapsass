import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import '../Styles.css/Header.css'
function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='wrapper' >
      <Carousel.Item  >
        <img 
          
          src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button>Contact us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Contact us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button>Contact us</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;