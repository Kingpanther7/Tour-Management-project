import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../assets/Components/Booking/Booking.js";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";

import { AuthContext } from "../context/AuthContext.js";
const TourDetails = () => {
  const { id } = useParams();
  const reviewsMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  //Fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // date format
  const options = { day: "numeric", month: "numeric", year: "numeric" };

  const ratingChanged = (newRating) => {
    setTourRating(newRating);
  };
  // send request to server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please login to add a review");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
      //reload the page after submit comment
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour_content">
                  <img src={photo} alt="" />
                  <div className="tour_info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour_rating d-flex align-items-center gap-1 bg-transparent">
                        <i
                          class="ri-star-fill"
                          style={{ color: "#ffc107" }}
                        ></i>{" "}
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i class="ri-map-pin-user-line"></i> {address}
                      </span>
                    </div>
                    <div className="tour_extra-details">
                      <span>
                        <i class="ri-map-pin-line"></i> {city}
                      </span>
                      <span>
                        <i class="ri-money-euro-box-line"></i> {price}Euros /
                        person
                      </span>
                      <span>
                        <i class="ri-pin-distance-line"></i> {distance} k/m
                      </span>
                      <span>
                        <i class="ri-group-line"></i> {maxGroupSize}
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  {/* ============= Reviews =============  */}
                  <div className="tour_reviews mt-4">
                    <h5>Reviews ({reviews?.length} reviews)</h5>
                    <Form>
                      <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                        <Rating
                          count={5}
                          size={35}
                          onChange={ratingChanged}
                          isHalf={true}
                          activeColor="#ffd700"
                        />
                      </div>

                      <div className="review_input">
                        <input
                          type="text"
                          ref={reviewsMsgRef}
                          placeholder="Write your review here..."
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                          onClick={submitHandler}
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user_reviews">
                      {reviews?.map((review) => (
                        <div className="review_item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* ============= Reviews =============  */}
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
