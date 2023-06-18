import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import TheBeasts from "../Components/TheBeasts";
import YouTubeSection from "../Components/YouTubeSection";
import NewArrivals from "../Components/NewArrivals";

function Home() {
  window.scrollTo(0, 0);
  document.title = `BM Moto`;
  return (
    <div className="container">
      <Header />
      <Hero />
      <TheBeasts />
      <NewArrivals />
      <YouTubeSection />
      <Footer />
    </div>
  );
}

export default Home;
