import "./Cards.scss";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineVerticalAlignBottom } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [book, setBook] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    getBook();
  }, []);

  useEffect(() => {
    if (sortOrder) {
      const sortedBooks = [...filtered];
      sortedBooks.sort((a, b) => {
        if (sortOrder === "price_asc") {
          return a.book_price - b.book_price;
        } else if (sortOrder === "price_desc") {
          return b.book_price - a.book_price;
        }
        return 0;
      });
      setFiltered(sortedBooks);
    }
  }, [sortOrder]);

  const getBook = async () => {
    try {
      const { data } = await axios.get(
        "https://api-crud.elcho.dev/api/v1/9ab31-01c61-cc880/book"
      );
      setBook(data.data);
      setFiltered(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const addBasket = async (bookItem) => {
    const { data } = await axios.post(
      `https://api-crud.elcho.dev/api/v1/877cb-84395-750dc/basket`,
      {
        basket: bookItem,
      }
    );
    console.log(data);
    alert("Добавлено в корзину");
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <section id="card">
      <div className="container">
        <div className="card-title">
          <h1>Возможно, Вам понравится</h1>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Сортировка</option>
            <option value="price_asc">По цене ↑</option>
            <option value="price_desc">По цене ↓</option>
          </select>
        </div>
        <div className="cards">
          {filtered.length ? (
            <>
              {" "}
              {filtered.slice(0, visibleCount).map((el) =>
                !el.basket ? (
                  <div key={el._id} className="card">
                    <Link to={`/details/${el._id}`}>
                      <img src={el.book_photo} alt={el.book_name} />
                    </Link>
                    <div className="card-text">
                      <h2>{el.book_price} сом</h2>
                      <button onClick={() => addBasket(el)}>
                        <FaShoppingCart />
                      </button>
                    </div>
                    <h3>
                      {el.book_categori} / {el.book_name}
                    </h3>
                  </div>
                ) : null
              )}
            </>
          ) : (
            <h1 className="card_error_text">Книга данные момент нету!!!</h1>
          )}
        </div>
        {filtered.length > visibleCount && (
          <div className="card-btns">
            <button onClick={loadMore}>
              Показать ещё <MdOutlineVerticalAlignBottom />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
