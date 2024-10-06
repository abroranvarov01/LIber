import React from "react";
import style from "./hero.module.scss";
import { Bookcard } from "../book-card/book-card";
import placeholder1 from "../../assets/placeholder_1.png";
import placeholder2 from "../../assets/placeholder_2.png";
import placeholder3 from "../../assets/placeholder_3.png";
import { Subscribecard } from "../subscribe-card/subscribe-card";

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className="container">
        <div className={style.wrap}>
        <div className={style.box}>
          <h2 className={style.title}>Кўп ўқилаётганлар</h2>
          <ul className={style.list}>
            <Bookcard img={placeholder1} title={"1984"} />
            <Bookcard img={placeholder2} title={"Code 8"} />
            <Bookcard img={placeholder3} title={"Rich dad poor dad"} />
          </ul>
        </div>
        <Subscribecard />
        </div>
      </div>
    </div>
  );
};
