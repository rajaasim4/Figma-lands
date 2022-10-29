import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Info_img from "../../assets/Info_img.svg";
import "./Info.css";
const Info = () => {
  return (
    <div className="Info py-5">
      <Container>
        <Row>
          <div className="Info_main d-flex overflow-hidden flex-wrap">
            <Col
              lg="6"
              className="d-flex align-items-start flex-column my-auto ps-5 py-md-5 my-sm-5"
            >
              <h1 className="text-light mb-3">
                OpenType features and Variable fonts
              </h1>
              <button className="blue_bg">Try For Free</button>
            </Col>
            <Col lg="6" md="12">
              <img src={Info_img} className="w-100 d-block mx-md-auto" alt="" />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
