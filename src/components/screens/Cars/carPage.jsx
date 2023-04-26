import { useEffect, useState } from "react";
import { CarItem } from "./CarItem";
import { cars as carsData } from "../Cars/cars";
import { useParams } from "react-router-dom";
import styles from "../home/Home.module.css";

export function CarPage() {
  const [cars, setCars] = useState(carsData);
  const { id } = useParams();

  let car = cars.find((item) => item.id == id);
  console.log(car.image);

  return (
    <div>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${car.image})`,
          height: "700px",
        }}
      />
      <div className={styles.content}>
        <h1>{car.name}</h1>
        <p>
          {new Intl.NumberFormat("ru-Ru", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
      </div>
    </div>
  );
}
