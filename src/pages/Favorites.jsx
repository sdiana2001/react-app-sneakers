import Card from "../components/Card/Card";

function Favorites({ items }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1 className="mb-40">Мои Избранные</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((obj, index) => (
          <Card
            key={index}
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            favorited = {true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
