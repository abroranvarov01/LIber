import React from "react";
import style from "./advantage-card.module.scss";

export const Advantagecard = ({ img, title, text }) => {
  return (
    <li className={style.item}>
      <div>
        <img className={style.img_box} src={img} alt="img" />
      </div>
      <div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
      </div>
    </li>
  );
};
