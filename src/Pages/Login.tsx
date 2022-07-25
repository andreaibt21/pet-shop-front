import Access from "../Components/Access";
import Styles from "./LoginStyles.module.scss";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <>
      <div className={Styles.loginContainer}>
        <Access />
      </div>
      <Footer />
    </>
  );
};

export default Login;
