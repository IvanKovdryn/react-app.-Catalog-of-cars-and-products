import { Link } from "react-router-dom";
import styles from "../home/Home.module.css";

export function CarItem({ car }) {
  return (
    <Link to={`/cars/${car.id}`} className={styles.item}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${car.image})`,
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
    </Link>
  );
}
