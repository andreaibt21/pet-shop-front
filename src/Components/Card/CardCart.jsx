import MyCard from "react-bootstrap/Card";
import Style from "./CardCart.module.scss";

const Card = (props) => {
  return (
    <MyCard className={Style.card}>
      <MyCard.Body className={Style.body}>
        <>
          <MyCard.Img variant="top" src={props.img} className={Style.imgCart} />
        </>
        <>
          <MyCard.Title className={Style.title}>{props.name}</MyCard.Title>
          <MyCard.Text className={Style.block}>
            Price ${props.price}
          </MyCard.Text>
        </>
      </MyCard.Body>
    </MyCard>
  );
};

export default Card;
