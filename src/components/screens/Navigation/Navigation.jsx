import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.row}>
        <div>Catalogs</div>
        <div className={styles.content}>
          <Link className={styles.item} to="/">
            Cars
          </Link>
          <Link className={styles.item} to="/products">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
