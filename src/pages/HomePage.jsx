import React, { Component } from "react";
import CtaSection from "../components/home/CtaSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";
import PromoSection from "../components/home/PromoSection";
import TestimonialSection from "../components/home/TestimonialSection";

class HomePage extends Component {
  componentDidMount () {
    window.scroll(0, 0);
  }
  
  render() {
    return (
      <main id="home-page">
        <HeroSection />
        <InfoSection />
        <FeaturesSection />
        <TestimonialSection />
        <PromoSection />
        <CtaSection />
      </main>
    );
  }
}

export default HomePage;
