import { useState } from "react";
import Styles from "./AccessStyles.module.scss";
import SignIn from "../SingIn"
import Register from "../Register/Register";
// import Perfil from "./Perfil";

const Access = () => {
  

  const [isSingIn, setIsSingIn] = useState(false);

  return (
    <div className={Styles.containerAccess}>
      {isSingIn ? (
        <>
          <h2> Sing in </h2>
          <p>  or <button
              className={Styles.button}
              onClick={() => setIsSingIn(!isSingIn)}
            >
              register
            </button>
            to have acces to buy
          </p>
          <SignIn/>
        </>
      ) : (
        <>
          <h2>Register </h2>
          <p>
            or{" "}
            <button
              className={Styles.button}
              onClick={() => setIsSingIn(!isSingIn)}
            >
              Sign in
            </button>{" "}
            if you have an acount
          </p>
          <Register  />
        </>
      )}
    
      
    </div>
  );
};

export default Access;
