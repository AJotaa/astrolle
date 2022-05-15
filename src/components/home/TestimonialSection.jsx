import React from "react";
import image1 from "../../img/testimonial-section/testimonial-image.png";
import imageDeco from "../../img/testimonial-section/image-deco.png";
import decoOne from "../../img/testimonial-section/deco-one.png";
import decoTwo from "../../img/testimonial-section/deco-two.png";
import decoThree from "../../img/testimonial-section/deco-three.png";
import decoFour from "../../img/testimonial-section/deco-four.png";

function TestimonialSection() {
  const testimonialData = [
    {
      id: 1,
      name: "Devon Lane",
      job: "Social Media Planner at Ueno",
      quote:
        "“Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.”",
      image1,
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-title-container">
          <h2 className="testimonial-title title-text">
            Creado para negocios y personas
          </h2>
        </div>
        <div className="testimonial-content-container">
          <div className="testimonial-image-container">
            <img
              src={testimonialData[0].image1}
              alt=""
              className="testimonia-image"
            />
            <img src={imageDeco} alt="" className="image-decoration" />
          </div>
          <div className="testimonial-text-container">
            <div className="tetimonial-text">
              <p className="testimonial-quote-text">
                {testimonialData[0].quote}
              </p>
            </div>
            <div className="testimonial-presonal-info">
              <span className="testimonial-name">
                {testimonialData[0].name}
              </span>
              <span className="testimonial-job">{testimonialData[0].job}</span>
            </div>
            <div className="testimonial-controls">
              <button>back</button>
              <button>next</button>
            </div>
          </div>
          <div className="testimonial-decoration-container">
            <img src={decoOne} alt="" className="decoration-one" />
            <img src={decoTwo} alt="" className="decoration-two" />
            <img src={decoThree} alt="" className="decoration-three" />
            <img src={decoFour} alt="" className="decoration-four" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
