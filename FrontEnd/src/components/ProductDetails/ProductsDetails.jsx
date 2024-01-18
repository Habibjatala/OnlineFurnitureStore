import React from "react";
import { useLocation } from "react-router-dom";

const ProductsDetails = () => {
  const location = useLocation();
  const { state } = location;
  console.log("State", state);
  return <div>{/* {location.state.cardImage} */}</div>;
};

export default ProductsDetails;
