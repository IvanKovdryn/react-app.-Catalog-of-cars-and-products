import React from "react";
import { Link } from "react-router-dom";

const ProductLink = ({ id }) => {
  return (
    <Link style={{ marginLeft: "8px" }} to={`/product/${id}`}>
      open product page
    </Link>
  );
};

export default React.memo(ProductLink);
