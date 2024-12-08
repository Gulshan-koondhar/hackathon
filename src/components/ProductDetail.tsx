import React from "react";
import ProductImages from "./ProductImages";
import SingleProductDetail from "./SingleProductDetail";
import ProductDesc from "./ProductDesc";
import SimilarProducts from "./SimilarProducts";

const ProductDetail = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 px-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          {/* Image */}
          <ProductImages />
        </div>
        <div className="flex-1">
          {/* Product Datil */}
          <SingleProductDetail />
        </div>
      </div>
      <div>
        <ProductDesc />
      </div>
      <div>
        <SimilarProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
