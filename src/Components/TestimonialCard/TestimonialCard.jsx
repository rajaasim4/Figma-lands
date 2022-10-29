import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="Testimonial_main mb-5">
      <div className="Testimonial_top d-flex mb-4">
        <img src={props.Avatar} alt="" />{" "}
        <h5 className="text-light ms-3">
          {props.name} <br />
          <span className="fw-light">Designer</span>
        </h5>
      </div>
      <p className="text-light">
        Slate helps you see how many more days you need to work to reach your
        financial goal for the month and year. Slate helps you see how many more
        days you need to work to reach your financial goal for the month and
        year.your financial goal for the month and year.
      </p>
    </div>
  );
};

export default TestimonialCard;
