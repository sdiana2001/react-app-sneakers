 import { useState } from 'react';
import styles from './Card.module.scss';
 
 function Card(props){
   const [checked, setChecked] = useState(false);

   function onPlus() {
     setChecked(!checked);
   }

    return (
      <div className={styles.card}>
        <div onClick={props.onFavorite} className={styles.favorite}>
          <img src="/public/icons/Unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
          <img
            className={styles.plus}
            onClick={onPlus}
            width={32}
            height={32}
            src={checked ? "/public/icons/checked.svg" : "/public/icons/plus.svg"}
            alt="Plus"
          />
        </div>
      </div>
    );
 }

 export default Card;