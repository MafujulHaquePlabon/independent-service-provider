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
      <h3 className="text-success">Doctor To Patient Health_Sheba</h3>
      <h5 className="text-success">Patients use Dr.Health_Sheba to find me. Sign up to find the care they need in one place. Sign up for Dr.Health_Sheba</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1&t=st=1650158644~exp=1650159244~hmac=4156792da9c665fc2179fbb58c5d774059e307be6c8fa263001e957bdd0dbf9e&w=996"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-success">Doctor To Patient Health_Sheba</h3>
      <h5 className="text-success">Patients use Dr.Health_Sheba to find me. Sign up to find the care they need in one place. Sign up for Dr.Health_Sheba</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'550px'}}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1&t=st=1650158644~exp=1650159244~hmac=4156792da9c665fc2179fbb58c5d774059e307be6c8fa263001e957bdd0dbf9e&w=996"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-success">Doctor To Patient Health_Sheba</h3>
      <h5 className="text-success">Patients use Dr.Health_Sheba to find me. Sign up to find the care they need in one place. Sign up for Dr.Health_Sheba</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;