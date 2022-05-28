import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Caixa" />
      </Link>
      <ul className={styles.list}>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/Entrada">Entrada</Link>
        </li>
        <li>
          <Link to="/Fechamentos">Fechamentos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
