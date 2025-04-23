import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";
import Cards from "../Cards";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api-crud.elcho.dev/api/v1/9ab31-01c61-cc880/book/${id}`
      );
      setDetails(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <section id="Details">
        <div className="container">
          <div className="details">
            <div className="img_box">
              <img src={details.book_photo} width={400} alt="" />
            </div>
            <div className="text">
              <h1>{details.book_name}</h1>
              <h2>{details.book_price}$</h2>
              <p>Жанр: {details.book_categori}</p>
              <div className="count">
                <div className="pluse">+</div>
                <h2>1</h2>
                <div className="pluse">-</div>
              </div>
              <div className="descriptions">
                <h3>Описание</h3>
                <p>{details.book_description}</p>
              </div>
              <div className="buttons">
                <button>Добавить в корзину</button>
                <button>Купить сейчас</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cards />
    </>
  );
};

export default Details;
