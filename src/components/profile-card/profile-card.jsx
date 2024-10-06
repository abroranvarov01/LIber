import React from "react";
import style from "./profile-card.module.scss";
import Ava from "../../assets/profile-ava.svg";

export const ProfileCard = () => {
  return (
    <div className={style.card}>
      <div>
        <img src={Ava} alt="" />
      </div>
      <div>
        <h2 className={style.title}>Суғдиёна Икромова</h2>
        <p className={style.text}>+998 90 253 77 53</p>
        <div className={style.wrap}>
          <p className={style.text_balance}>ID: 0001 Баланс: 45 000 сўм</p>
        </div>
      </div>
    </div>
  );
};
