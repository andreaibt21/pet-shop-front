import Carousel from "react-bootstrap/Carousel";
import Styles from "./CarouselStyles.module.scss";
import img1 from "../../Assets/banner1.png";
import img2 from "../../Assets/banner2.png";
import img3 from "../../Assets/banner3.png";
import img4 from "../../Assets/banner4.png";

const MyCarousel = () => {
  const seconds = 1500;
  return (
    <div className={Styles.containerCarousel}>
      <div className={Styles.innerContainerCarousel}>
        <Carousel>
          <Carousel.Item interval={seconds}>
            <img className={Styles.imgCarousel} src={img1} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={seconds}>
            <img className={Styles.imgCarousel} src={img2} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={seconds}>
            <img className={Styles.imgCarousel} src={img3} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={seconds}>
            <img className={Styles.imgCarousel} src={img4} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MyCarousel;
