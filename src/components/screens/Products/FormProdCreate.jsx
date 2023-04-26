import { useContext, useState } from "react";
import styles from "../home/Home.module.css";
import { useForm } from "react-hook-form";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { CarService } from "../../services/service";
import { ModalContext } from "../../providers/ModalContext";

export function FormProdCreate() {
  const { closeModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ["products"],
    (data) => {
      CarService.createProd(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        reset();
        closeModal();
      },
    }
  );

  const createProduct = (data) => {
    mutate(data);
  };

  return (
    <form
      style={{
        color: "#303030",
        width: "100%",
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "10px",
      }}
      className={styles.form}
      onSubmit={handleSubmit(createProduct)}
    >
      <div className={styles.input_wrapper}>
        <input
          {...register("image", { required: "true" })}
          placeholder="Image"
          className="w-full"
        />
        {errors?.image?.message && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              position: "absolute",
              bottom: "-20px",
              paddingLeft: "5px",
            }}
          >
            image is required
          </p>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          {...register("title", { required: "true" })}
          placeholder="Name"
          className="w-full"
        />
        {errors?.name?.message && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              position: "absolute",
              bottom: "-20px",
              paddingLeft: "5px",
            }}
          >
            name is required
          </p>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          {...register("price", { required: "true" })}
          placeholder="Price"
          className="w-full"
        />
        {errors?.price?.message && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              position: "absolute",
              bottom: "-20px",
              paddingLeft: "5px",
            }}
          >
            price is required
          </p>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          {...register("rate", { required: "true" })}
          placeholder="Rate"
          className="w-full"
        />
        {errors?.rate?.message && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              position: "absolute",
              bottom: "-20px",
              paddingLeft: "5px",
            }}
          >
            rate is required
          </p>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          {...register("description", { required: "true" })}
          placeholder="Description"
          className="w-full"
        />
        {errors?.desc?.message && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              position: "absolute",
              bottom: "-20px",
              paddingLeft: "5px",
            }}
          >
            description is required
          </p>
        )}
      </div>
      <button
        style={{
          marginBottom: "0px",
          marginTop: "30px",
          backgroundColor: "rgb(156 163 175",
        }}
      >
        Create
      </button>
    </form>
  );
}
