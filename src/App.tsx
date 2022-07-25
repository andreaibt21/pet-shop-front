import Styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className={Styles.containerApp}>
      <NavBar />

      <Outlet></Outlet>
    </div>
  );
};

export default App;
