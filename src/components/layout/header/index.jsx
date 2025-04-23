import { Link, useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";

import header_logo from "../../../assets/images/BOOKShop.svg";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [passwords, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const route = useNavigate();
  let text = "123";

  function handleSearch() {
    if (!search.trim()) return;
    let locSearch = JSON.parse(localStorage.getItem("search") || "[]");
    locSearch.push(search);
    localStorage.setItem("search", JSON.stringify(locSearch));
    window.location.reload(); // чтобы обновить компонент Cards
  }

  function password() {
    if (passwords === text) {
      route("/admin");
      setOpen(false);
    } else if (passwords.trim() === "") {
      alert("Заполните полный ");
    } else {
      alert("Пароль не верный ❌");
    }
  }

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <Link to={"/"}>
              <img src={header_logo} alt="Logo" />
            </Link>
            <div className="header-left">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                />
                <h2 className="search-icon" onClick={handleSearch}>
                  <CiSearch />
                </h2>
              </div>
              <Link to="/basket">
                <MdShoppingCart />
                <br />
                Корзина
              </Link>
              <Link to="/" onClick={() => setOpen(true)}>
                <FaRegUserCircle />
                <br />
                Админ
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        id="modal"
        style={{ position: "fixed", display: open ? "flex" : "none" }}
      >
        <button className="modal_btns" onClick={() => setOpen(false)}>
          <ImCancelCircle />
        </button>
        <div className="container">
          <div className="modal">
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password.."
            />
            <button onClick={() => password()}>SIGN IN</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
