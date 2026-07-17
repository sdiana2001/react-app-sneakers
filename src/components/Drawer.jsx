function Drawer(props) {
    return (
      <div className="overlay" onClick={props.onCloseDrawer}>
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <img className="cu-p" src="/public/icons/remove.svg" alt="Remove" />
          </h2>
          <div className="items">
            props.items.map
            {/* <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: `url('/public/img-card/sneakers-1.svg')`,
                }}
                className="cartItemImg">  {" "} </div>
              <div className="mr-20">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img src="/public/icons/remove.svg" alt="Remove" />
            </div> */}
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