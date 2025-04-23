import { useState } from "react";
import image from "../../../assets/images/photo.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "./Main.scss";

const Main = () => {
  const images = [image, image, image, image, image, image, image];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="main"
      style={{
        background: `url(${images[currentIndex]})`,
        minHeight: "80vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background 0.5s ease-in-out",
      }}
    >
      <div className="container">
        <div className="main">
          <button onClick={prevSlide}>
            <FaArrowLeftLong />
          </button>
          <button onClick={nextSlide}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
