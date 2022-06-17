import React, { Component } from "react";
import AboutSection from "../components/product/AboutSection";
import SmallInfoSection from "../components/product/SmallInfoSection";
import RegisterSection from "../components/product/RegisterSection";
import BenefitsSection from "../components/product/BenefitsSection";

class ProductPage extends Component {
  render() {
    return (
      <main className="product-page">
        <RegisterSection />
        <SmallInfoSection />
        <AboutSection />
        <BenefitsSection />
      </main>
    );
  }
}

export default ProductPage;
