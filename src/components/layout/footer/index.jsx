import "./footer.scss";
import footer_logo from "../../../assets/images/BOOKShop.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <img src={footer_logo} alt="" />
          <div className="footer-center">
            <Link to={"/"}>Способ оплаты</Link>
            <Link to={"/"}>Условия доставки</Link>
            <Link to={"/"}>Правила покупки</Link>
          </div>
          <div className="footer-center">
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>О нас</Link>
          </div>
          <div className="footer-center">
            <Link to={"/"}>Связаться с нами:</Link>
            <Link to={"/"}>+996 222 533 735</Link>
            <Link to={"/"}>+996 222 533 735</Link>
            <Link to={"/"}>+996 222 533 735</Link>
            <Link to={"/"}>+996 222 533 735</Link>
          </div>
          <div className="footer-right">
            <h2>Адрес</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Varius in dolor viverra feugiat <br /> neque, sed in. Mattis
              volutpat malesuada <br />
              velit parturient aliquam, est. Mauris vitae velit <br /> laoreet
              faucibus nec amet velit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
