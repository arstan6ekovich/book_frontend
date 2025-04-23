import axios from "axios";
import React, { useState, useEffect } from "react";

const Basket = () => {
  const [basket, setBasket] = useState([]);

  const getBasket = async () => {
    try {
      const { data } = await axios.get(
        "https://api-crud.elcho.dev/api/v1/9ab31-01c61-cc880/book"
      );

      const basketItems = data.data.filter((el) => el.basket);
      setBasket(basketItems);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  let sort = basket.map((el) => el.basket);

  return (
    <div>
      <h1>Basket</h1>
      {sort.map((el) => (
        <div key={el._id}>
          <img width={400} src={el.book_photo} alt={el.book_name} />
          <p>{el.book_name}</p>
          <p>{el.book_price} сом</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
