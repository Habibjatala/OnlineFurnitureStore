import React from "react";
import AllProducts from "../../components/HomePage/ProductsSection/ProductsSection";
import HeroSection from "../../components/HomePage/HeroSection/HeroSection";
import FeaturedSection from "../../components/HomePage/FeaturedSection/FeaturedSection";
import NewProducts from "../../components/HomePage/NewProducts/NewProducts";
import AboutUS from "../../components/HomePage/AboutUs/AboutUS";
import NewSeller from "../../components/HomePage/NewSeller/NewSeller";

const Home = () => {
  return (
    <div className="bg-[#F6F6F6] flex flex-col gap-6">
      <HeroSection />
      <AllProducts />
      <FeaturedSection />
      <NewProducts />
      <AboutUS />
      <NewSeller />
    </div>
  );
};

export default Home;
