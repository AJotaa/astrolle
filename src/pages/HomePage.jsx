import React, { Component } from "react";
import CtaSection from "../components/home/CtaSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";
import PromoSection from "../components/home/PromoSection";
import TestimonialSection from "../components/home/TestimonialSection";
// import TheFooter from "../components/layout/TheFooter";
// import TheHeader from "../components/layout/TheHeader";

class HomePage extends Component {
  render() {
    return (
      <main id="home-page">
        {/* <TheHeader /> */}
        <HeroSection />
        <InfoSection />
        <FeaturesSection />
        <TestimonialSection />
        <PromoSection />
        <CtaSection />
        {/* <TheFooter /> */}
      </main>
    );
  }
}

export default HomePage;
