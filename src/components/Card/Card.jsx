import { useState } from 'react';
import styles from './Card.module.scss';
 
//Компонент Card получает аргументы (пропсы) от App:
 function Card({ onFavorite, title, imageUrl, price, onPlus, favorited=false }) {
   const [checked, setChecked] = useState(false);
   const [isFavorite, setIsFavorite] = useState(favorited); // Список избранных товаров

   function handlePlusClic() {
     // 2. Внутри handlePlusClic мы отловили товар и берем  переменные (title, imageUrl, price)
     // и упаковываем их в фигурные скобки {}, создавая новый объект:
     onPlus({ title, imageUrl, price });
     setChecked(!checked);
   }

    function handleFavClic() {
      onFavorite({ title, imageUrl, price });
      setIsFavorite(!isFavorite);
    }

   return (
     <div className={styles.card}>
       <div onClick={handleFavClic} className={styles.favorite}>
         <img
           src={
             isFavorite
               ? "/public/icons/liked.svg"
               : "/public/icons/UnLiked.svg"
           }
           alt="Unliked"
         />
       </div>
       <img width={133} height={112} src={imageUrl} alt="Sneakers" />
       <h5>{title}</h5>
       <div className="d-flex justify-between align-center">
         <div className="d-flex flex-column">
           <span>Цена:</span>
           <b>{price} руб.</b>
         </div>
         <img
           className={styles.plus}
           onClick={handlePlusClic}
           width={32}
           height={32}
           src={
             checked ? "/public/icons/checked.svg" : "/public/icons/plus.svg"
           }
           alt="Plus"
         />
       </div>
     </div>
   );
 }

 export default Card;