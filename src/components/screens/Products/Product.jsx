import React, { useState } from "react";
import style from "./style.module.css";
import ProductLink from "./ProductLink";

export default React.memo(function Product({ product }) {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? "bg-blue-300" : "bg-yellow-300";
  const btnClasses = ["py-2 px-4 border mt-6", btnClassName];
  return (
    <div className="bg-neutral-700 relative rounded-md overflow-hidden flex flex-col items-center pb-3 mb-2">
      <div className="w-full">
        <div
          className="flex items-center justify-center"
          style={{ backgroundColor: "#fff" }}
        >
          <img
            src={product.image}
            className="w-auto h-80"
            alt={product.title}
          />
        </div>
        <p className="px-4 py-2" style={{ height: "109px" }}>
          {product.title}
        </p>
        <p className="font-bold text-center ">
          {new Intl.NumberFormat("ru-Ru", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </div>
      <p className="p-2">
        rate:{" "}
        <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
      </p>
      <div>
        <button
          onClick={() => setDetails((prev) => !prev)}
          className={btnClasses.join(" ")}
        >
          {details ? "hide details" : "show details"}
        </button>
        <ProductLink id={product.id} />
      </div>

      {details && (
        <div className={style.description}>
          <p className="p-2 overflow-auto">{product.description}</p>
        </div>
      )}
    </div>
  );
});
