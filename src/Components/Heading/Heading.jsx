import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Heading = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5 text-light text-center">{props.title}</h1>
          <p className="text-center mt-3 text-light">{props.children}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Heading;
