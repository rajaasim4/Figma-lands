import React from "react";
import { Roll } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import Avatar1 from "../../assets/Avatar1.svg";
import Avatar2 from "../../assets/Avatar2.svg";
import Avatar3 from "../../assets/Avatar3.svg";
import Avatar4 from "../../assets/Avatar4.svg";
import Heading from "../../Components/Heading/Heading";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="Testimonials">
      <Heading title={"Testimonials"} />
      <Container>
        <Row className="justify-content-center">
          <Col
            lg="5"
            md="12"
            className="mt-5 d-flex align-items-center flex-column"
          >
            <Roll triggerOnce={true}>
              <TestimonialCard Avatar={Avatar1} name="Clarie Bell" />
              <TestimonialCard Avatar={Avatar2} name="Raph Fisher" />
            </Roll>
          </Col>
          <Col lg="5" md="12" className="d-flex align-items-center flex-column">
            <Roll triggerOnce={true}>
              <TestimonialCard Avatar={Avatar3} name="Francisco Lane" />
              <TestimonialCard Avatar={Avatar4} name="Jorge Murphy" />
            </Roll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
