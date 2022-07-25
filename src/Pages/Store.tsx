import React from "react";
import { Outlet } from "react-router-dom";
import Cards from "../Components/Cards/Cards";
import Styles from "./Store.module.scss";
import Footer from "../Components/Footer";

function Store() {
  return (
    <>
    <div className={Styles.containerStore}>
      
      <div className={Styles.containerCards}>
        <Cards/>
      </div>
      <div  className={Styles.containerOutlet}>
        <Outlet></Outlet>
      </div>
    </div>
    <Footer />

    </>
  );
}

export default Store;
