import React from "react";
import Style from "./Cards.module.scss";
import { getProducts } from "../../api";
import { useQuery } from "react-query";
import Card from "../Card";
import Loading from "../Loading/Loading.jsx";

const Cards = () => {
  const { data, error, isLoading } = useQuery(["products"], getProducts);

  return (
    <div className={Style.divContainer}>
      <div className={Style.containerCards}>
        {error && !isLoading && <p>Error, please try again</p>}
        {isLoading && <Loading />}
        {data &&
          data.map((d) => (
            <Card
              name={d.name}
              img={d.img}
              price={d.price}
              key={d._id}
              id={d._id}
              des={null}
            />
          ))}
      </div>
    </div>
  );
};

export default Cards;
