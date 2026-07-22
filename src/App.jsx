import "./App.scss";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]); // // Список всех товаров
  const [cartItems, setCartItems] = useState([]); // Список товаров в корзине
  const [cartOpened, setCardOpened] = useState(false); // Открыта/закрыта корзина
  const [searchValue, setSearchValue] = useState(""); // // Текст из поля поиска
  const [favorites, setFavorites] = useState([]); // Список товаров в Избранных

  
  useEffect(() => {
    axios
      .get("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/items")
      .then((res) => {
        setItems(res.data); // получаем данные из сервера о всех товарах
      });

    axios
      .get("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data); // получаем данные о всех товарах в корзине
      });
  }, []);

  const onAddToCart = (obj) => {
    // Проверяем, есть ли элемент с таким же title или id
    const findItem = cartItems.find((item) => item.title === obj.title);
    // item.title - товар, который уже лежит в корзине.
    // obj.title — товар, по которому мы кликнули.

    // Если есть — удаляем и из стейта, и с сервера
    if (findItem) {
      setCartItems((prev) => prev.filter((item) => item.title !== obj.title));
      axios.delete(
        `https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart/${findItem.id}`
      );
    }
    // Если нет — добавляем локально и отправляем на сервер
    else {
      // Отправляем на сервер, и получаем с сервера созданный объект с реальным ID корзины
      axios
        .post("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart", obj)
        .then((res) => {
          setCartItems((prev) => [...prev, res.data]);
        });
    }
  };

  const onAddToFavorites = (obj) => {
    setFavorites((prev) => [...prev, obj]);
    axios.get("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/favorite", obj);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCardOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onCloseCart={() => setCardOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route path="/favorites" element={<Favorites items={favorites} />} />
      </Routes>
    </div>
  );
}

export default App;

// До клика: В onPlus лежит просто пустая ссылка на функцию onAddToCart. Никаких данных о конкретных кроссовках там ещё нет.
// В момент клика: Внутри карточки срабатывает функция handlePlusClic. 
// Она берет свои данные (title, price и т.д.), «упаковывает» их в объект и закидывает внутрь onPlus(...).
// После клика: Данные по «трубе» onPlus мгновенно прилетают в App.js и становятся аргументом (obj) внутри функции onAddToCart.
