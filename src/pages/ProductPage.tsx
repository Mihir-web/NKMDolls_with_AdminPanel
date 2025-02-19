import React from "react";
import Youmayalsolike from "../components/Youmayalsolike";
import ProductDetail from "../components/ProductDetail";
import ProductDesc from "../components/ProductDesc";

const ProductPage: React.FC = () => {
  return (
    <div>
    <ProductDetail/>
    <ProductDesc/>
      <Youmayalsolike/>
      <br/>
      <br/>
      <br/>
    </div>
    
  );
};

export default ProductPage;
