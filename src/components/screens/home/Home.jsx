import { useState } from "react";
import styles from "./Home.module.css";
import { cars as carsData } from "../Cars/cars";
import { CreateCarForm } from "../Cars/createCarForm";
import { CarItem } from "../Cars/CarItem";

export function Home() {
  const [cars, setCars] = useState(carsData);

  return (
    <div>
      <h1 className={styles.title}>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div className={styles.row}>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}
