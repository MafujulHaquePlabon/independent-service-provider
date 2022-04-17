import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='w-100'>
            <Carousel>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block  w-100"
      src="https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1&t=st=1650158644~exp=1650159244~hmac=4156792da9c665fc2179fbb58c5d774059e307be6c8fa263001e957bdd0dbf9e&w=996"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1&t=st=1650158644~exp=1650159244~hmac=4156792da9c665fc2179fbb58c5d774059e307be6c8fa263001e957bdd0dbf9e&w=996"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1&t=st=1650158644~exp=1650159244~hmac=4156792da9c665fc2179fbb58c5d774059e307be6c8fa263001e957bdd0dbf9e&w=996"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;