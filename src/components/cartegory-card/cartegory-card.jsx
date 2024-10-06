import React from "react";
import style from "./cartegory-card.module.scss";
import { Link } from "react-router-dom";

export const Categorycard = ({ img, title }) => {
  return (
    <li className={style.item}>
      <img src={img} alt="img" />
      <h3 className={style.text}>{title}</h3>
    </li>
  );
};
