import React from "react";
import { Slide } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../Components/Heading/Heading";
import GalleryData from "../../Data/GalleryData";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="Gallery py-5">
      <Heading title={"Gallery"}>
        We focus on ergonomics and meeting you where you work. <br />
        It's only a keystroke away.
      </Heading>
      <Container>
        <Row>
          <Col
            lg="12"
            className=" mt-5  d-flex justify-content-evenly flex-wrap"
          >
            {GalleryData.map((Item, Index) => {
              return (
                <Slide cascade damping={0.5} triggerOnce={true} key={Index}>
                  <img
                    key={Item.id}
                    src={Item.imgsrc}
                    className="mx-3 mb-5"
                    id={Item.galleryid}
                    alt=""
                  />
                </Slide>
              );
            })}
          </Col>
        </Row>
      </Container>
      <button className="black_bg d-block mx-auto">View More</button>
    </div>
  );
};

export default Gallery;
