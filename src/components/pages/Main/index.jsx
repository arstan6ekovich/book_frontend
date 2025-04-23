import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "./Main.scss";

const images = [
  new URL("../../../assets/images/photo.png", import.meta.url).href,
  new URL("../../../assets/images/mar.jpg", import.meta.url).href,
  new URL("../../../assets/images/len.jpg", import.meta.url).href,
  new URL("../../../assets/images/dev.jpg", import.meta.url).href,
];

const Main = () => {
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
        backgroundImage: `url(${images[currentIndex]})`,
        minHeight: "80vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 0.5s ease-in-out",
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
