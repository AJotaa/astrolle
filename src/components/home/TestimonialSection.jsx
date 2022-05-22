import React, { useState } from "react";
import image1 from "../../img/testimonial-section/testimonial-image.png";
import image2 from "../../img/testimonial-section/testimonial-image2.png";
import imageDeco from "../../img/testimonial-section/image-deco.png";
import decoOne from "../../img/testimonial-section/deco-one.png";
import decoTwo from "../../img/testimonial-section/deco-two.png";
import decoThree from "../../img/testimonial-section/deco-three.png";
import decoFour from "../../img/testimonial-section/deco-four.png";
import BaseButton from "../ui/BaseButton";

function TestimonialSection() {
  const [selection, setSelection] = useState(0);

  const testimonialData = [
    {
      id: 1,
      name: "Devon Lane",
      job: "Social Media Planner at Ueno",
      quote:
        "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.”",
      image: image1,
    },
    {
      id: 2,
      name: "Michael Miller",
      job: "Social Media Planner at Ueno",
      quote:
        "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.”",
      image: image2,
    },
  ];

  function controlQuote(e) {
    const dataLength = testimonialData.length - 1;

    if (e === "next") {
      if (selection < dataLength) {
        setSelection(selection + 1);
      } else {
        setSelection(0);
      }
    } else {
      if (selection > 0) {
        setSelection(selection - 1);
      } else {
        setSelection(dataLength);
      }
    }
  }

  return (
    <section className="testimonial-section">
      <div className="testimonial-container container">
        <div className="testimonial-title-container">
          <h2 className="testimonial-title title-text">
            Creado para negocios y personas
          </h2>
        </div>
        <div className="testimonial-content-container">
          <div className="testimonial-image-container">
            <img
              src={testimonialData[selection].image}
              alt=""
              className="testimonial-image"
            />
            <img src={imageDeco} alt="" className="image-decoration" />
          </div>
          <div className="testimonial-text-container">
            <div className="tetimonial-text">
              <span>“ </span>
              <p className="testimonial-quote-text">
                {testimonialData[selection].quote}
              </p>
            </div>
            <div className="testimonial-extra-features">
              <div className="testimonial-presonal-info">
                <span className="testimonial-name">
                  {testimonialData[selection].name}
                </span>
                <span className="testimonial-job">
                  {testimonialData[selection].job}
                </span>
              </div>
              <div className="testimonial-controls">
                <BaseButton
                  mode={"btn-control"}
                  onclick={() => controlQuote("back")}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </BaseButton>
                <BaseButton
                  mode={"btn-control"}
                  onclick={() => controlQuote("next")}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </BaseButton>
              </div>
            </div>
          </div>
          <div className="testimonial-decoration-container">
            <img
              src={decoOne}
              alt=""
              className="decoration-one testimonial-deco"
            />
            <img
              src={decoTwo}
              alt=""
              className="decoration-two testimonial-deco"
            />
            <img
              src={decoThree}
              alt=""
              className="decoration-three testimonial-deco"
            />
            <img
              src={decoFour}
              alt=""
              className="decoration-four testimonial-deco"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
