import React, { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { SliderData } from './SliderData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={1} className="text-center">
          <Button variant='secondary' onClick={prevSlide}>&lt;</Button>
        </Col>
        <Col xs={12} md={10} className="text-center">
          {SliderData.map((slide, index) => (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <Image
                  src={slide.image}
                  alt={`slide ${index}`}
                  fluid
                  className="center-image"
                />
              )}
            </div>
          ))}
        </Col>
        <Col md={1} className="text-center">
          <Button variant='secondary' onClick={nextSlide}>&gt;</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageSlider;
