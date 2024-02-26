import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/img-1.jpg";
import heroImg02 from "../assets/images/img-2.jpg";
import heroVideo from "../assets/images/img-3.jpg";
import SearchBar from "../shared/SearchBar";
//import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../assets/Components/Featured Tours/FeaturedTourList";
import MasonryImagesGallery from "../assets/Components/image-gallery/MasonryImagesGallery";
//import Testimonials from "../assets/Components/Testimonial/Testimonials";
//import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ============== hero section start =============*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <h1>
                  Lorem ipsum dolor sit amet{" "}
                  <span className="highlight"> haha </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <img src={heroVideo} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ============== hero section end =============*/}

      {/* ========= feautured tour section start ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========= feautured tour section end ========= */}
      {/* ========== gallery section start ============*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== gallery section end ============*/}
    </>
  );
};

export default Home;
