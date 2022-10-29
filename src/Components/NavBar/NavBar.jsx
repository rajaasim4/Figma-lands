import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiMenuAltRight } from "react-icons/all";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/Logo.png";
import "./NavBar.css";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [sticky, Setsticky] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.addEventListener("scroll", StickyNavbar);
    return () => {
      window.removeEventListener("scroll", StickyNavbar);
    };
  }, []);
  const StickyNavbar = () => {
    if (window !== undefined) {
      let Height = window.scrollY;

      Height >= 150 ? Setsticky("sticky-navbar") : Setsticky("");
    }
  };

  return (
    <>
      <Container fluid className={`${sticky} Main-navbar`}>
        <Row>
          <Col xlg="8" lg="10" md="12" sm="12" className="mx-auto">
            <Navbar variant="dark">
              <Container className="">
                <Navbar.Brand href="#home">
                  <img src={Logo} alt="" />
                </Navbar.Brand>
                <Nav className="mx-auto">
                  <ScrollLink className="nav-link px-4" to="Home" smooth={true}>
                    Home
                  </ScrollLink>
                  <ScrollLink
                    className="nav-link px-4"
                    to="Testimonials"
                    offset={-40}
                    smooth={true}
                  >
                    Products
                  </ScrollLink>
                  <ScrollLink
                    className="nav-link px-4"
                    offset={-50}
                    to="Info"
                    smooth={true}
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    className="nav-link px-4"
                    to="Footer"
                    smooth={true}
                  >
                    Contact
                  </ScrollLink>
                </Nav>
                <button className=" Nav_btn">Log In</button>
                <div className="Hamburger">
                  <BiMenuAltRight onClick={handleShow} />
                </div>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Offcanvas show={show} onHide={handleClose} bg={"dark"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mobile_nav">
              <ScrollLink
                className="nav-link px-4"
                to="Home"
                smooth={true}
                onClick={handleClose}
              >
                Home
              </ScrollLink>
              <ScrollLink
                className="nav-link px-4"
                to="Testimonials"
                offset={-40}
                smooth={true}
                onClick={handleClose}
              >
                Products
              </ScrollLink>
              <ScrollLink
                className="nav-link px-4"
                offset={-50}
                to="Info"
                smooth={true}
                onClick={handleClose}
              >
                About
              </ScrollLink>
              <ScrollLink
                className="nav-link px-4"
                to="Footer"
                smooth={true}
                onClick={handleClose}
              >
                Contact
              </ScrollLink>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
};

export default NavBar;
