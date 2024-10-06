import React from "react";
import style from "./book-card.module.scss";

export const Bookcard = ({ img, title }) => {
  return (
    <li className={style.item}>
      <div className={style.img_box}>
        <img src={img} alt="img" />
      </div>
      <h3 className={style.title}>{title}</h3>
    </li>
  );
};
