import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Style from "./ProductStyles.module.scss";
import { getProductsById } from "../../api";
import { useQuery } from "react-query";
import Loading from "../Loading";
import Select from "../Select";
import { useStateValue } from "../../context/StateProvider";

const Product = () => {
  const [{ user }] = useStateValue();

  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["products", id], () =>
    getProductsById(id)
  );
  if (!user.name) {
    return (
         <Select/>
    )}
  if (error) {
    return (
      <div className={Style.containerProduct}>
        <p>Error, please try again</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={Style.containerProduct}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={Style.containerProduct}>
      {data && (
        <Card
          name={data.name}
          img={data.img}
          price={data.price}
          key={data.id}
          id={data.id}
          des={data.des}
        
        />
      )}
    </div>
  );
};

export default Product;
