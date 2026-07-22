import Card from "../components/Card/Card";

function Home({items, searchValue, /*setSearchValue*/ onChangeSearchInput, onAddToFavorites, onAddToCart}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1 className="mb-40">
          {searchValue ? `Поиск: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/public/icons/search.svg" alt="Search" />
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
          .map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={onAddToCart}
              onFavorite={onAddToFavorites}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;