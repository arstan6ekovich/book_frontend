import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import "./Basket.scss";

const Basket = () => {
  const [basket, setBasket] = useState([]);
  const [counts, setCounts] = useState({});

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

  const handleIncrease = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  let sort = basket.map((el) => el.basket);

  return (
    <div id="Basket">
      <div className="container">
        <div className="basket">
          <div className="block">
            <div className="contact">
              <div className="contact_box">
                <h1>Контакные данные</h1>
                <input type="text" placeholder="Фио*" />
                <input type="text" placeholder="Телефон*" />
              </div>
              <div className="contact_box2">
                <h1>Оплата</h1>
                <div className="radio">
                  <input type="radio" />
                  <h2>Оплачу наличными при получении заказа</h2>
                </div>
                <h2>
                  Оплата с банковской картой через <br /> <span>PayBox</span>
                </h2>
                <button className="bay">Оплатить</button>
              </div>
            </div>
            <div className="delivery">
              <div className="delivery_box">
                <h1>Доставка</h1>
                <p>
                  Выберите удобный способ доставки <br /> для этого заказа.
                </p>
                <div className="radio">
                  <input type="radio" name="on" />
                  <h2>Самовывоз</h2>
                </div>
                <div className="radio">
                  <input type="radio" name="on" />
                  <h2>Доставка курьером</h2>
                </div>
                <textarea
                  className="text"
                  placeholder="Область, город (район, село), улица, дом№, кв.№*"
                ></textarea>
              </div>
              <div className="delivery_box2">
                <div className="price">
                  <h3>Общая сумма:</h3>
                  <h2>3000$</h2>
                </div>
                <h3>Ещё не оплачено</h3>
              </div>
            </div>
            <div className="books">
              {sort.map((el, index) => (
                <div key={index} className="box">
                  <div className="box_img">
                    <img src={el.book_photo} alt="" />
                  </div>
                  <div className="text">
                    <h1>{el.book_name}</h1>
                    <h2>{el.book_price}$</h2>

                    <div className="count">
                      <button
                        onClick={() => handleIncrease(el.id)}
                        className="pluse"
                      >
                        +
                      </button>
                      <h2>{counts[el.id] || 1}</h2>
                      <button
                        onClick={() => handleDecrease(el.id)}
                        className="pluse"
                      >
                        -
                      </button>
                    </div>

                    <div className="delete">
                      <h3>Удалить</h3>
                      <button>
                        <RiDeleteBinFill />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
