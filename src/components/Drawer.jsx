function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={(e) => {
              e.stopPropagation(); // Чтобы клик не застрял внутри как пузырек
              onClose();
            }}
            className="cu-p"
            src="/public/icons/remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div
              key={obj.id || obj.title}
              className="cartItem d-flex align-center mb-20"
            >
              <div
                style={{
                  backgroundImage: `url(${obj.imageUrl})`,
                }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
              className="cu-p"
                onClick={() => onRemove(obj.id)}
                src="/public/icons/remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ <img src="/public/icons/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;