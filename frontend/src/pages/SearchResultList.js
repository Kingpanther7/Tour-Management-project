import React, { useState } from "react";
import SearchBar from "../shared/SearchBar";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Search Result"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <div className="text-center">No tour found</div>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
