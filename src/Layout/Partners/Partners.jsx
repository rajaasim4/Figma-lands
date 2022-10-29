import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import p1 from "../../assets/p1.svg";
import p2 from "../../assets/p2.svg";
import p3 from "../../assets/p3.svg";
import p4 from "../../assets/p4.svg";
import p5 from "../../assets/p5.svg";
import p6 from "../../assets/p6.svg";
import Heading from "../../Components/Heading/Heading";
import "./Partners.css";
const Partners = () => {
  return (
    <div className="Partners py-5" style={{ backgroundColor: "black" }}>
      <Container>
        <Heading title={"Partners"}>
          We focus on ergonomics and meeting you where you work. <br />
          It's only a keystroke away.
        </Heading>

        <Row className="my-5">
          <Zoom triggerOnce={true}>
            <Col
              lg="12"
              md="12"
              className="mx-auto d-flex justify-content-evenly flex-wrap"
            >
              <img
                src={p1}
                alt=""
                className="mx-lg-0 mx-md-4 mb-5 mx-sm-4 Partners_img"
              />
              <img
                src={p2}
                alt=""
                className="mx-lg-0 mx-md-4 mb-5 mx-sm-4 Partners_img"
              />
              <img
                src={p3}
                alt=""
                className="mx-lg-0 mx-md-4 mb-5 mx-sm-4 Partners_img"
              />
              <img
                src={p4}
                alt=""
                className="mx-lg-0 mx-md-4 mb-5 mx-sm-4 Partners_img"
              />
              <img
                src={p5}
                alt=""
                className="mx-lg-0 mx-md-4 mb-5 mx-sm-4 Partners_img"
              />
              <img
                src={p6}
                alt=""
                className="mx-lg-0 mx-md-4 mb-5 mx-sm-4 Partners_img"
              />
            </Col>
          </Zoom>
        </Row>
        <button className="black_bg mx-auto d-block my-5">All Partners</button>
      </Container>
    </div>
  );
};

export default Partners;
