import "./App.scss";
import search from "../public/icons/search.svg";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCardOpened] = useState(false);
  const [searchValue, setSerchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    // Проверяем, есть ли элемент с таким же title или id
    const findItem = cartItems.find((item) => item.title === obj.title);

    if (findItem) {
      // Если есть — удаляем и из стейта, и с сервера
      setCartItems((prev) => prev.filter((item) => item.title !== obj.title));
      axios.delete(
        `https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart/${findItem.id}`
      );
    } else {
      // Если нет — добавляем локально и отправляем на сервер
      setCartItems((prev) => [...prev, obj]);
      axios.post("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart", obj);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSerchValue(event.target.value);
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

      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1 className="mb-40">
            {searchValue ? `Поиск: "${searchValue}"` : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj) => (
              <Card
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onPlus={onAddToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// До клика: В onPlus лежит просто пустая ссылка на функцию onAddToCart. Никаких данных о конкретных кроссовках там ещё нет.
// В момент клика: Внутри карточки срабатывает функция handlePlusClic. 
// Она берет свои данные (title, price и т.д.), «упаковывает» их в объект и закидывает внутрь onPlus(...).
// После клика: Данные по «трубе» мгновенно прилетают в App.js и становятся аргументом (obj) внутри функции onAddToCart.
