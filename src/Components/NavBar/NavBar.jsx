import styles from "./NavBarStyles.module.scss";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import basketImg from "../../Assets/basket.png";
import paw from "../../Assets/paw.png";

const NavBar = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className={styles.containerNavBar}>
      <h1>Petshop</h1>
      <div className={styles.navlinks}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/store/main" className={styles.link}>
          Store
        </Link>
        {!user.name ? (
          <Link to="/auth" className={styles.link}>
            Login
          </Link>
        ) : (
          <Link to="/perfil" className={styles.link}>
            <img src={paw} className={styles.basket} alt="basket" />
            PERFIL
            {console.log("basket", basket)}
          </Link>
        )}
        <Link to="/basket" className={styles.link}>
          <img src={basketImg} className={styles.basket} alt="basket" />
          {basket.length}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
