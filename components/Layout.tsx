import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";
import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import Footer from "./Footer";

type Props = {};

function Layout({}: Props) {
  // @ts-ignore
  let Apparelproducts: string[{}] = [
    {
      product_name: "Suits",
      product_image: "men suits.png",
      product_description: "",
    },
    {
      product_name: "Sweaters",
      product_image: "/man sweater.jpg",
      product_description: "",
    },
    {
      product_name: "Tshirts",
      product_image: "t-shirt.png",
      product_description: "",
    },
    {
      product_name: "Shoes",
      product_image: "shoes.jpg",
      product_description: "",
    },
    {
      product_name: "Hats",
      product_image: "hats.jpeg",
      product_description: "",
    },
    {
      product_name: "Dresses",
      product_image: "women dress.jpg",
      product_description: "",
    },
  ];

  // @ts-ignore
  let Carproducts: string[{}] = [
    {
      product_name: "Wheels",
      product_image: "/wheel.png",
      product_description: "",
    },
    {
      product_name: "Piston",
      product_image: "/Piston.jpg",
      product_description: "",
    },
    {
      product_name: "Brakes",
      product_image: "/brake.png",
      product_description: "",
    },
    {
      product_name: "Clutch",
      product_image: "/clutch.png",
      product_description: "",
    },
    {
      product_name: "Exhaust",
      product_image: "/exhaust.png",
      product_description: "",
    },
    {
      product_name: "Lamps",
      product_image: "/lamps.jpg",
      product_description: "",
    },
  ];

  // @ts-ignore
  let Beddingsproducts: string[{}] = [
    {
      product_name: "Blankets",
      product_image: "blanket.jpg",
      product_description: "",
    },
    {
      product_name: "Duvets",
      product_image: "Duvet.jpg",
      product_description: "",
    },
    {
      product_name: "Sheets",
      product_image: "sheets.jpg",
      product_description: "",
    },
    {
      product_name: "Pillows",
      product_image: "pillows.jpeg",
      product_description: "",
    },
    {
      product_name: "Bedding Set",
      product_image: "bedset.webp",
      product_description: "",
    },
    {
      product_name: "Quilt",
      product_image: "Quilt.jpg",
      product_description: "",
    },
  ];
  // @ts-ignore
  let Kitchenproducts: string[{}] = [
    {
      product_name: "Plates",
      product_image: "plates.jpg",
      product_description: "",
    },
    {
      product_name: "Pans",
      product_image: "Pan.jpg",
      product_description: "",
    },
    {
      product_name: "Cutlery",
      product_image: "cutlery.webp",
      product_description: "",
    },
    {
      product_name: "Cups",
      product_image: "cups.jpg",
      product_description: "",
    },
    {
      product_name: "Utensils",
      product_image: "utensils.jpeg",
      product_description: "",
    },
    {
      product_name: "Boards",
      product_image: "boards.jpeg",
      product_description: "",
    },
  ];
  // @ts-ignore
  let Furnitureproducts: string[{}] = [
    {
      product_name: "Sofas",
      product_image: "sofa.jpeg",
      product_description: "",
    },
    {
      product_name: "Tables",
      product_image: "table.jpeg",
      product_description: "",
    },
    {
      product_name: "Dinning set",
      product_image: "dinning-set.jpeg",
      product_description: "",
    },
    {
      product_name: "Chairs",
      product_image: "chair.jpg",
      product_description: "",
    },
    {
      product_name: "Beds",
      product_image: "bed.jpeg",
      product_description: "",
    },
    {
      product_name: "Desk",
      product_image: "desk.jpeg",
      product_description: "",
    },
  ];
  // @ts-ignore
  let ArtDecoproducts: string[{}] = [
    {
      product_name: "Paintings",
      product_image: "painting.jpeg",
      product_description: "",
    },
    {
      product_name: "Chritmas Deco",
      product_image: "christmas deco.jpg",
      product_description: "",
    },
    {
      product_name: "Carpets",
      product_image: "carpet.jpg",
      product_description: "",
    },
    {
      product_name: "Vase",
      product_image: "vase.jpeg",
      product_description: "",
    },
    {
      product_name: "Mirrors",
      product_image: "mirror.jpeg",
      product_description: "",
    },
    {
      product_name: "Ornaments",
      product_image: "ornaments.jpeg",
      product_description: "",
    },
  ];
  return (
    <>
      <Hero />
      <CategorySection />
      <PopularProducts />
      <Banner />
      <ProductSection
        productTitle={"Auto and Car parts"}
        productImage="wheel.png"
        products={Carproducts}
      />
      <ProductSection
        productTitle={"Apparel"}
        productImage="t-shirt.png"
        products={Apparelproducts}
      />
      <ProductSection
        productTitle={"Beddings"}
        productImage="sheets.jpg"
        products={Beddingsproducts}
      />
      <ProductSection
        productTitle={"Kitchenware"}
        productImage="utensils.jpeg"
        products={Kitchenproducts}
      />
      <ProductSection
        productTitle={"Furniture"}
        productImage="dinning-set.jpeg"
        products={Furnitureproducts}
      />
      <ProductSection
        productTitle={"Art and Deco"}
        productImage="painting.jpeg"
        products={ArtDecoproducts}
      />

      <Footer />
    </>
  );
}

export default Layout;
