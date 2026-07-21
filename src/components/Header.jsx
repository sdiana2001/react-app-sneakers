import logo from "../../public/icons/logo.svg";
import cart from "../../public/icons/cart.svg";
import favorite from "../../public/icons/favorite.svg";
import profile from "../../public/icons/profile.svg";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src={logo} alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30 d-flex  align-center cu-p" onClick={props.onCloseCart}>
          <img width={20} height={20} src={cart} alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30 d-flex  align-center cu-p">
          <img width={20} height={20} src={favorite} alt="favorite" />
          <span>Закладки</span>
        </li>
        <li className="d-flex  align-center cu-p">
          <img width={20} height={20} src={profile} alt="profile" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
