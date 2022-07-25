import React from "react";
import { useStateValue } from "../../context/StateProvider";
import style from "./Perfil.module.scss";
import Button from "react-bootstrap/Button";
import image from "../../Assets/animals/fox.png";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const [{ user }, dispatch] = useStateValue();
  let navigate = useNavigate();

  const handleCLick = () => {
    dispatch({
      type: "REMOVE_USER",
    });
    sessionStorage.clear();

    navigate("../auth", { replace: true });
  };

  return (
    <div className={style.perfilContainer}>
      <div className={style.info}>
        <h1> Welcome, {user?.name}</h1>

        <div>
          <h3>Username: {user?.userName}</h3>
          <h3>Mail: {user?.email}</h3>
        </div>
        <img src={image} alt="animal" />

        <Button
          className={style.button}
          variant="primary"
          onClick={handleCLick}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Perfil;
