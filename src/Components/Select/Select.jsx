import React from "react";
import bunny from "../../Assets/animals/bunny.png";
import Styles from "./SelectStyles.module.scss";
import koala from "../../Assets/animals/Koala.png";
import { useStateValue } from "../../context/StateProvider";

const Select = () => {
  const [{ user }] = useStateValue();

  if (!user.name) {
    return (
      <div className={Styles.containerDiv + " " + Styles.bounceIn}>
        <h2>Please, sign in</h2>
        <img src={koala} className={Styles.koala} alt="koala" />
      </div>
    );
  }

  return (
    <div className={Styles.containerDiv + " " + Styles.bounceIn}>
      <h2>Select a product</h2>

      <img src={bunny} alt="bunny" />
    </div>
  );
};

export default Select;
