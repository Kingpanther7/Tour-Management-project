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
                  <span className="highlight">
                    Embark on a Journey of a Lifetime
                  </span>
                </h1>
                <p>Pack Your Bags. Not Your Worries.</p>
                <p>
                  Each Journey Is a Chapter in Your Personal Adventure Book.
                  Make It Unforgettable.
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
      <section className="gallery">
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
