import React from "react";
import { useStateValue } from "../../context/StateProvider";
import Card from "../Card/CardCart";
import img from "../../Assets/animals/ArtsyCat.png";
import bear from "../../Assets/animals/bear.png";
import bear2 from "../../Assets/animals/bear2.png";
import style from "./Cart.module.scss";

const Cart = () => {
  const [{ basket }] = useStateValue();

  if (basket.length === 0) {
    return (
      <div className={style.empty}>
        <h2>Your basket is empty!</h2>
        <img src={img} alt="" />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <img src={bear2} className={style.imgBear1} alt="" />
      <div className={style.containerCards}>
        {basket.map((d) => (
          <Card
            name={d.name}
            img={d.img}
            price={d.price}
            key={d._id}
            id={d._id}
            des={null}
         
          />
        ))}{" "}
      </div>
      <img src={bear} className={style.imgBear2} alt="" />
    </div>
  );
};

export default Cart;
