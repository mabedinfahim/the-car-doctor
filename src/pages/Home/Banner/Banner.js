import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../../images/banner/banner1.jpg'
import Banner2 from '../../../images/banner/banner2.jpg'
import Banner3 from '../../../images/banner/banner3.jpg'


const Banner = () => {
    return (
      <div className="row">
        <div className="col-12">
        <Carousel variant="white" className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>
      </div>
    );
};

export default Banner;