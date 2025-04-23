import img1 from "../../../assets/images/img1.svg";
import img2 from "../../../assets/images/img2.svg";
import img3 from "../../../assets/images/img3.svg";
import img4 from "../../../assets/images/img4.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import "./categori.scss";

const Categori = () => {
  return (
    <section id="categori">
      <div className="container">
        <div className="categori">
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img1} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img2} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img3} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img4} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img1} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img2} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img3} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
          <div className="categori-block">
            <div className="block-shadow"></div>
            <img src={img4} alt="" />
            <h3>
              Детектив <FaArrowRightLong />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categori;
