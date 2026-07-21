 import { useState } from 'react';
import styles from './Card.module.scss';
 
 function Card({ onFavorite, title, imageUrl, price, onPlus }) {
   const [checked, setChecked] = useState(false);

   function handlePlusClic() {
     onPlus({ title, imageUrl, price });
     setChecked(!checked);
   }

   return (
     <div className={styles.card}>
       <div onClick={onFavorite} className={styles.favorite}>
         <img src="/public/icons/Unliked.svg" alt="Unliked" />
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