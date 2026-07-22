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

        {items.length === 0 ? (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/public/icons/empty-cart.png"
              alt="Empty cart"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenButton">
              <img
                src="/public/icons/left-arrow.svg"
                alt="Arrow"
                className="mr-15"
              />
              Вернуться назад
            </button>
          </div>
        ) : (
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
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="removeBtn"
                  src="/public/icons/remove.svg"
                  alt="Remove"
                />
              </div>
            ))}

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
              <button className="greenButton">
                Оформить заказ <img src="/public/icons/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;