import React, { Component } from "react";
import AboutSection from "../components/product/AboutSection";
import SmallInfoSection from "../components/product/SmallInfoSection";
import RegisterSection from "../components/product/RegisterSection";
import BenefitsSection from "../components/product/BenefitsSection";
import QuestionsSection from "../components/product/QuestionsSection";
import MoreInfoSection from "../components/product/MoreInfoSection";
import ReadySection from "../components/product/ReadySection";

import TestimonialSection from "../components/home/TestimonialSection";

class ProductPage extends Component {
  render() {
    return (
      <main className="product-page">
        <RegisterSection />
        <SmallInfoSection />
        <AboutSection />
        <BenefitsSection />
        <QuestionsSection />
        <MoreInfoSection />
        <TestimonialSection />
        <ReadySection />
      </main>
    );
  }
}

export default ProductPage;
