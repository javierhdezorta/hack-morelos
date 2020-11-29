import "../css/App.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../assets/DSCF0043.jpg";
import celebrating from "../assets/DSCF0056_Trim698.jpg";
import education from "../assets/DSCF0058.jpg";
import taken from "../assets/STC_0034.JPG";
import bear from "../assets/DSCF0007.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken, bear];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
