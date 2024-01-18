import React from "react";
import InternalPagesLayout from "../../common/InternalPagesLayout/InternalPagesLayout";
import ProductsDetails from "../../components/ProductDetails/ProductsDetails";
const ProductDetailPage = () => {
  return (
    <div>
      <InternalPagesLayout>
        <ProductsDetails />
      </InternalPagesLayout>
    </div>
  );
};

export default ProductDetailPage;
