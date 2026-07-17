import './App.scss'
import search from "../public/icons/search.svg";
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React, { useState } from 'react';



  function App() {
  const [items, setItems] = useState([])
  const [cartItems, setcartItems] = useState([]);
  const [cartOpened, setCardtOpened]= useState(false);

  

  React.useEffect(() => {
    fetch("https://66a904f6e40d3aa6ff5a4dc3.mockapi.io/items").then((response) => {
    return response.json()
    .then((json)=>{
     setItems(json);
    });
    });
      },    []);

    return (
      <div className="wrapper clear">
        {cartOpened && (<Drawer onCloseDrawer={() => setCardtOpened(false)} /> )}
        <Header onCloseCart={() => setCardtOpened(true)} />
        <div className="content p-40">
          <div className="d-flex align-center justify-between">
            <h1 className="mb-40">Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src={search} alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {items.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log("On Favorite")}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };


export default App
