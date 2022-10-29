import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/all";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container className="py-5 px-5 Footer">
        <Row className="">
          <Col
            lg="3"
            md="6"
            className="text-light mb-4 d-flex flex-column align-items-sm-center aling-items-lg-start justify-sm-center "
            // className="text-light mb-4 d-flex flex-column align-items-sm-center justify-sm-center "
          >
            <h6 className="mb-4">Fingetipe</h6>
            <Nav.Link className="fw-light ">Home</Nav.Link>
            <Nav.Link className="fw-light ">Examples</Nav.Link>
            <Nav.Link className="fw-light ">Pricing</Nav.Link>
            <Nav.Link className="fw-light ">Update</Nav.Link>
          </Col>
          <Col
            lg="3"
            md="6"
            className="text-light mb-4 d-flex flex-column align-items-sm-center aling-items-lg-start justify-sm-center "
            // className="text-light mb-4 d-flex flex-column align-items-sm-center justify-sm-center "
          >
            <h6 className="text-light mb-md-4">Resources</h6>
            <Nav.Link className="fw-light">Home</Nav.Link>
            <Nav.Link className="fw-light">Examples</Nav.Link>
            <Nav.Link className="fw-light">Pricing</Nav.Link>
            <Nav.Link className="fw-light">Update</Nav.Link>
          </Col>
          <Col
            lg="3"
            md="6"
            className="text-light mb-4 d-flex flex-column align-items-sm-center aling-items-lg-start justify-sm-center "
            // className="text-light mb-4 d-flex flex-column align-items-sm-center justify-sm-center "
          >
            <h6 className="text-light mb-md-4">About</h6>
            <Nav.Link className="fw-light">Home</Nav.Link>
            <Nav.Link className="fw-light">Examples</Nav.Link>
            <Nav.Link className="fw-light">Pricing</Nav.Link>
            <Nav.Link className="fw-light">Update</Nav.Link>
          </Col>

          <Col
            lg="3"
            md="6"
            className="text-light d-flex flex-column  justify-sm-center "
            // className="text-light d-flex flex-column align-items-sm-center justify-sm-center "
          >
            <address>
              7480 Mockingbird Hill undefined <br />
              (239) 555-0108
            </address>
            <div className="Footer_social ">
              <FaFacebook className="fs-2 " />
              <FaTwitter className="fs-2 mx-4" />
              <FaLinkedin className="fs-2" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
