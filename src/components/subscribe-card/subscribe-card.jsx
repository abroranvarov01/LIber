import React from "react";
import style from "./subscribe-card.module.scss";

export const Subscribecard = () => {
  return (
    <div className={style.card}>
      <h2 className={style.title}>Китоб ўқишни ёқтирасизми?</h2>
      <p className={style.text}>
        Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
      </p>
      <button className={style.btn}>Обуна бўлиш</button>
    </div>
  );
};
