import React from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="5">
            <div className="logo">
              <img src={logo} alt="" />
              {/* <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem, deleniti.
              </p> */}

              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Links</h5>

            <ul className="footer_quick-links ps-0">
              {quick_links.map((item, index) => (
                <li key={item} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Contact</h5>

            <ul className="footer_quick-links ps-0">
              <li className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>

                <p className="mb-0">Järvenpää,Finland</p>
              </li>
              <li className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">eseigbejoseph7@gmail.com</p>
              </li>
              <li className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+358466583253</p>
              </li>
            </ul>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year} designed and developed by Eseigbe Joseph. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
