import React from "react";
import { Fade, Roll } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import { GiKnifeFork, IoInfinite, RiAliensFill } from "react-icons/all";
import Feature_img from "../../assets/Feature_img.png";
import Heading from "../../Components/Heading/Heading";
import "./Feature.css";
const Feature = () => {
  return (
    <>
      <div className="Feature">
        <Heading title={"Features"}>
          Most calendars are designed for teams. Slate is designed for <br />
          freelancers who want a simple way to plan their schedule.
        </Heading>
        <Container className="mt-5">
          <Row>
            <Col lg="9">
              <Roll triggerOnce={true}>
                <img src={Feature_img} className="d-block w-100" alt="" />
              </Roll>
            </Col>
            <Col lg="3" className=" my-5">
              <Fade cascade damping={0.5} triggerOnce={true}>
                <FeatureCoponent
                  Icon={<GiKnifeFork />}
                  title={"A Single Source of Truth"}
                  para={
                    "When you add work to your Slate calendar we automatically calculate useful insights "
                  }
                />
                <FeatureCoponent
                  Icon={<RiAliensFill />}
                  title={"Intuitive Interface"}
                  para={
                    "When you add work to your Slate calendar we automatically calculate useful insights"
                  }
                />
                <FeatureCoponent
                  Icon={<IoInfinite />}
                  title={"Or With Rule"}
                  para={
                    "When you add work to your Slate calendar we automatically calculate useful insights"
                  }
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const FeatureCoponent = (props) => {
  return (
    <>
      <div className="Feature_sub">
        <h3 className="text-light fw-semibold">
          <span style={{ color: "#02E4C0" }} className="mx-2">
            {props.Icon}
          </span>
          {props.title}
        </h3>
        <p className="text-light">{props.para}</p>
      </div>
    </>
  );
};

export default Feature;
