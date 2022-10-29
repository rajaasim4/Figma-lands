import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Layout/Banner/Banner";
import Content from "../Layout/Content/Content";
import Feature from "../Layout/Feature/Feature";
import Gallery from "../Layout/Gallery/Gallery";
import Info from "../Layout/Info/Info";
import Partners from "../Layout/Partners/Partners";
import Testimonials from "../Layout/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Feature />
      <Content />
      <Gallery />
      <Partners />
      <Testimonials />
      <Info />

      <Footer />
    </>
  );
};

export default Home;
