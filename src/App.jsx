import './App.scss'
import logoImg from "../public/icons/logo.svg";
import cart from "../public/icons/cart.svg";
import favorite from "../public/icons/favorite.svg";
import profile from "../public/icons/profile.svg";

function App() {
 
    return (
      <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img width={40} height={40} src={logoImg} alt="" />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30 d-flex  align-center">
              <img width={18} height={18} src={cart} alt="" />
              <span>1205 руб.</span>
            </li>
            <li className="mr-30 d-flex  align-center">
              <img width={18} height={18} src={favorite} alt="" />
              <span>Закладки</span>
            </li>
            <li className="d-flex  align-center">
              <img width={18} height={18} src={profile} alt="" />
              <span>Профиль</span>
            </li>
          </ul>
        </header>

        <div className="content p-40">
          <h1 className="mb-40">Все кроссовки</h1>

          <div className="d-flex">
            <div className="card">
              <img
                width={133}
                height={112}
                src="/public/img-card/sneakers-1.svg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img
                    width={11}
                    height={11}
                    src="/public/icons/plus.svg"
                    alt="Plus"
                  />
                </button>
              </div>
            </div>

            <div className="card">
              <img
                width={133}
                height={112}
                src="/public/img-card/sneakers-2.svg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img
                    width={11}
                    height={11}
                    src="/public/icons/plus.svg"
                    alt="Plus"
                  />
                </button>
              </div>
            </div>

            <div className="card">
              <img
                width={133}
                height={112}
                src="/public/img-card/sneakers-3.svg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img
                    width={11}
                    height={11}
                    src="/public/icons/plus.svg"
                    alt="Plus"
                  />
                </button>
              </div>
            </div>

            <div className="card">
              <img
                width={133}
                height={112}
                src="/public/img-card/sneakers-4.svg"
                alt="Sneakers"
              />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img
                    width={11}
                    height={11}
                    src="/public/icons/plus.svg"
                    alt="Plus"
                  />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  };


export default App
