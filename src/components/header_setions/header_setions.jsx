import React from "react";
import style from "./header_setions.module.scss";

export const Header_setions = () => {
  return (
    <div className={style.header_setions}>
      <div className="container">
        <ul className={style.list}>
          <li className={style.item}>
            <p className={style.item_text}>Аудиокитоб</p>
          </li>
          <li className={style.item}>
            <p className={style.item_text}>Электрон китоблар</p>
          </li>
          <li className={style.item}>
            <p className={style.item_text}>Босма китоблар</p>
          </li>
          <li className={style.item}>
            <p className={style.item_text}>Контакт</p>
          </li>
          <li className={style.item}>
            <p className={style.item_text}>Биз хақимизда</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
