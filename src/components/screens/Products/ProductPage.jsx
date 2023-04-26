import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarService } from "../../services/service";
import Product from "./Product";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [details, setDetails] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const response = await CarService.getById(id);
      setProduct(response);
    };
    fetchData();
  }, [id]);

  if (!product?.title) return <p>Loading...</p>;

  const btnClassName = details ? "bg-blue-300" : "bg-yellow-300";
  const btnClasses = ["py-2 px-4 border mt-6", btnClassName];

  return (
    <div>
      <Product product={product} />
    </div>
  );
}
