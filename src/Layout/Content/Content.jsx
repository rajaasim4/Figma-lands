import React from "react";
import { Slide } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import Content_img1 from "../../assets/Content_img1.svg";
import Content_img2 from "../../assets/Content_img2.svg";
import ComponentCard from "../../Components/ComponentCard/ComponentCard";
import Heading from "../../Components/Heading/Heading";
import "./Content.css";
const Content = () => {
  return (
    <>
      <div className="Content">
        <Heading title={"Contents"}>
          We focus on ergonomics and meeting you where you work. <br />
          It's only a keystroke away.
        </Heading>
        <Container className="mt-5">
          <Row>
            <Col lg="6" className="mb-5">
              <Slide direction="left" triggerOnce={true}>
                <ComponentCard
                  title={"Work"}
                  btntitle={"Sign Up"}
                  para={
                    "Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
                  }
                  imgsrc={Content_img1}
                />
              </Slide>
            </Col>
            <Col lg="6">
              <Slide direction="right" triggerOnce={true}>
                <ComponentCard
                  title={"Designing For Real Data"}
                  btntitle={"Try For Free"}
                  para={
                    "Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
                  }
                  imgsrc={Content_img2}
                />
              </Slide>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
