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
        "https://api-crud.elcho.dev/api/v1/877cb-84395-750dc/basket"
      );
      const filtered = data.data.filter((el) => el.basket);
      const filterData = filtered.map((el) => el.basket);
      console.log(data);

      setBasket(filterData);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteBasket = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://api-crud.elcho.dev/api/v1/877cb-84395-750dc/basket/${id}`
      );
      setBasket(data);
      getBasket()
    } catch (e) {
      console.error(e);
    }
  };

  const handleIncrease = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrease = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <div id="Basket">
      <div className="container">
        <div className="basket">
          <div className="block">
            <div className="contact">
              <div className="contact_box">
                <h1>Контактные данные</h1>
                <input type="text" placeholder="ФИО*" />
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
                  placeholder="Область, город (район, село), улица, дом №, кв. №*"
                ></textarea>
              </div>
              <div className="delivery_box2">
                <div className="price">
                  <h3>Общая сумма:</h3>
                  <h2>
                    {basket.reduce(
                      (acc, el) => acc + el.book_price * (counts[el.id] || 1),
                      0
                    )}
                    $
                  </h2>
                </div>
                <h3>Ещё не оплачено</h3>
              </div>
            </div>

            <div className="books">
             {
              basket.length ? <> {basket.map((el) => (
                <div key={el.id} className="box">
                  <div className="box_img">
                    <img src={el.book_photo} alt={el.book_name} />
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
                      <h3 onClick={() => deleteBasket(el._id)}>Удалить</h3>
                      <button>
                        <RiDeleteBinFill />
                      </button>
                    </div>
                  </div>
                </div>
              ))}</> :<h1>Ваши корзина пуста</h1>
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
