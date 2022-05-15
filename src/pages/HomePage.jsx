import React, { Component } from "react";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";
import TestimonialSection from "../components/home/TestimonialSection";
import TheHeader from "../components/layout/TheHeader";

class HomePage extends Component {
  render() {
    return (
      <main id="home-page">
        <TheHeader />
        <HeroSection />
        <InfoSection />
        <FeaturesSection />
        <TestimonialSection />
      </main>
    );
  }
}

export default HomePage;
