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
        < Carousel.Caption className='content'>
       <h3>First slide label</h3>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no.
            </p>
          <Button>Contact us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='content'>
          <h3>Second slide label</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no.
            </p>
          <Button>Contact us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='content'>
          <h3>Third slide label</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no.
            </p>
          <Button>Contact us</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;