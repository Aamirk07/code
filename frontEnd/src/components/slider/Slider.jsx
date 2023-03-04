import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "./slider.scss";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.indianexpress.com/2022/06/UKRAINE-CRISISRUSSIA-FASHION.jpg",
    "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/31121724/fashion-1024x682.jpeg",
    "https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/1366x7.2e16d0ba.fill-1366x700.format-jpeg.jpegquality-80_BBYNgQw.jpg",
    "https://www.uca.ac.uk/media/marketing-media/student-work/undergrad-courses/fashion-epsom-/2019/Ashmita-Bissessur,-BA-(Hons)-Fashion,-UCA-Epsom_crop-.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
