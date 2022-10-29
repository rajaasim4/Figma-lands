import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import Banner_img from "../../assets/Banner_img.png";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="Banner Home">
        <section>
          <Container className=" py-4 ">
            <Row>
              <Col lg="12">
                <Fade triggerOnce={true}>
                  <h1 className="text-center text-capitalize fw-semibold text-light">
                    Work at the speed <br /> of thought
                  </h1>
                  <p className="text-center mt-3 text-light">
                    Most calendars are designed for teams. Slate is designed for{" "}
                    <br />
                    freelancers who want a simple way to plan their schedule.
                  </p>
                  <div className="Banner_btn mt-5 d-flex flex-wrap">
                    <button className="blue_bg me-5">Try For Free</button>
                    <button className="black_bg ms-5">Learn More</button>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="Banner_img position-relative">
          <Zoom triggerOnce={true}>
            <img src={Banner_img} className="w-100" alt="" />
          </Zoom>
          <div className="Banner_img_blur position-absolute bottom-0"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
