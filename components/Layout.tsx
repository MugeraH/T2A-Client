import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";
import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import Footer from "./Footer"

type Props = {};

function Layout({}: Props) {
  return (
    <>
     
      <Hero />
      <CategorySection />
      <PopularProducts />
      <Banner />
      <ProductSection />
      <ProductSection />
      <ProductSection />
      <Footer/>
    </>
  );
}

export default Layout;
