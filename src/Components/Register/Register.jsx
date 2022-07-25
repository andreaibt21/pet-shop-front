import Styles from "./Register.module.scss";
import { useState } from "react";
import { createNewUser } from "../../api";
import Perfil from "../Perfil/Perfil";
import { useStateValue } from "../../context/StateProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [{}, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await createNewUser({ name, userName, email, password });

    if (!newUser) {
      // TODO maybe consider other posibilities that cause an error in createNewUser
      // consider try catch
      alert("User and email are already registered");
    } else {
      const u = newUser.data;
      setUser(u);
      sessionStorage.setItem("email", u.email);
      dispatch({
        type: "SET_USER",
        item: newUser.data,
      });
      navigate("../perfil", { replace: true });

    }
  };

  return (
    <div>
      {!user.name ? (
        <form onSubmit={handleSubmit} className={Styles.form}>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
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
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
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
      ) : (
        <Perfil user={user} />
      )}
    </div>
  );
};

export default Register;
