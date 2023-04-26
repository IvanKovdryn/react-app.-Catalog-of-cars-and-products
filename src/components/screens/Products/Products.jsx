import React, { useCallback, useContext, useEffect, useState } from "react";
import { CarService } from "../../services/service";
import Product from "./Product";
import { AuthContext } from "../../providers/AuthProvider";
import { ModalContext } from "../../providers/ModalContext";
import { useQuery } from "@tanstack/react-query";
import { CreateUser } from "../../providers/createUser";
import { FormProdCreate } from "./FormProdCreate";

export default React.memo(function Products() {
  const { openModal, closeModal } = useContext(ModalContext);
  const { user, setUser } = useContext(AuthContext);
  const { data, isLoading, error } = useQuery(["products"], () =>
    CarService.getProducts()
  );
  if (isLoading) return <p>Loading</p>;

  const modalUser = () => {
    openModal({
      children: <CreateUser />,
    });
  };
  const modalProduct = () => {
    openModal({
      children: <FormProdCreate />,
    });
  };

  return (
    <div>
      <div className="flex justify-between px-4 mt-2 mb-4">
        <p className="text-2xl font-bold">Products</p>
        <button
          onClick={modalProduct}
          className="px-10 py-2 bg-neutral-700 transition hover:bg-neutral-600 rounded-md"
        >
          Create product
        </button>
      </div>
      <div className="prods-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.length &&
          !user &&
          data
            .slice(0, 8)
            .map((product) => <Product product={product} key={product.id} />)}
        {data.length &&
          user &&
          data.map((product) => <Product product={product} key={product.id} />)}
      </div>
      <div className="my-4 text-center w-full">
        {!user && (
          <button
            className="bg-neutral-900 py-2 rounded-md px-12 bg-neutral-900r"
            onClick={modalUser}
          >
            more
          </button>
        )}
      </div>
    </div>
  );
});
