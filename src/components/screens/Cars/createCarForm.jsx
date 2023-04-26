import { useState } from "react";
import styles from "../home/Home.module.css";
import { useForm } from "react-hook-form";

export function CreateCarForm({ setCars }) {
  const [data, setData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const createCar = (data) => {
    setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
    reset();
  };

  return (
    <form
      style={{ color: "#303030" }}
      className={styles.form}
      onSubmit={handleSubmit(createCar)}
    >
      <div className={styles.input_wrapper}>
        <input {...register("name", { required: "true" })} placeholder="Name" />
        {errors?.name?.message && (
          <p style={{ color: "red" }}>name is required</p>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          {...register("price", { required: "true" })}
          placeholder="Price"
        />
        {errors?.price?.message && (
          <p style={{ color: "red" }}>price is required</p>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          {...register("image", { required: "true" })}
          placeholder="Image"
        />
        {errors?.image?.message && (
          <p style={{ color: "red" }}>image is required</p>
        )}
      </div>
      <button>Create</button>
    </form>
  );
}
