import React from "react";
import banner from "../Assets/banner.png";
import Styles from "./Home.module.scss";
import MyCarousel from "../Components/Carousel/Carousel";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div>
      <div className={Styles.containerHome}>
        <img className={Styles.imgBanner} src={banner} alt="animales" />

        <h2>Buy something to make your lovely friend happy</h2>
        <MyCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
