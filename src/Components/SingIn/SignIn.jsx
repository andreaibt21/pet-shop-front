import Styles from "./SignIn.module.scss";
import { useState } from "react";
import { checkUser } from "../../api";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

const SignIn = (isSignIn) => {
  const [{}, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [password, setPass] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const retorno = await checkUser({ userName, password });
    console.log(retorno);

    if (retorno.data) {
      dispatch({
        type: "SIGN_IN",
        user: retorno.data,
      });
      sessionStorage.setItem("email", retorno.data.email);

      navigate("../perfil", { replace: true });
    } else {
      alert("Please try again");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <fieldset>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            min={5}
            name="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
        </fieldset>
        <input className={Styles.button} type="submit" name="submit" />
      </form>
    </div>
  );
};

export default SignIn;
