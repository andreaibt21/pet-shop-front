import MyCard from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Style from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { addToBasket } from "../../api";

const Card = (props) => {
  const [{}, dispatch] = useStateValue();
  const { id } = useParams();
  let email = sessionStorage?.getItem("email");

  const handleClick = () => {
       
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: props.name,
        price: props.price,
        img: props.img,
       
      },
    });

    const item = {
      basket: [{ name: props.name, price: props.price, img: props.img }],
    };

    if (email != null) {
      addToBasket(email, item);
    }
  };

  return (
    <MyCard className={props.cart ? Style.cart : Style.card}>
      <MyCard.Body className={Style.body}>
        {props.cart ? (
          <>
            <MyCard.Img
              variant="top"
              src={props.img}
              className={Style.imgCart}
            />
            <>
              <MyCard.Title className={Style.block}>{props.name}</MyCard.Title>
              <MyCard.Text className={Style.block}>
                Price ${props.price}
              </MyCard.Text>
            </>
          </>
        ) : (
          <>
            <MyCard.Title>{props.name}</MyCard.Title>
            <MyCard.Text>Price ${props.price}</MyCard.Text>
            <MyCard.Img
              variant="top"
              src={props.img}
              className={!props.des ? Style.imgCart : Style.imgDes}
            />
          </>
        )}

        {!props.des ? (
          <NavLink to={`${props.id}`} key={props.id}>
            <Button className={Style.button} variant="primary">
              see details
            </Button>
          </NavLink>
        ) : (
          <>
            <MyCard.Text>{props.des}</MyCard.Text>
            {!props.cart && (
              <Button
                className={Style.button}
                variant="primary"
                onClick={handleClick}
              >
                Add to cart
              </Button>
            )}
          </>
        )}
      </MyCard.Body>
    </MyCard>
  );
};
//connect()(Card)
export default Card;
