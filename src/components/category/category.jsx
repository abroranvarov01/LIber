import React from "react";
import style from "./category.module.scss";
import holder from "../../assets/cards/placeholder1.png";
import holder2 from "../../assets/cards/placeholder4.png";
import holder3 from "../../assets/cards/placeholder6.png";
import holder4 from "../../assets/cards/placeholder5.png";
import holder5 from "../../assets/cards/placeholder3.png";
import holder6 from "../../assets/cards/placeholder2.png";
import { Categorycard } from "../cartegory-card/cartegory-card";

export const Category = () => {
  return (
    <div className={style.Category}>
      <div className="container">
        <h2 className={style.title}>
          <ul className={style.list}>
            <Categorycard img={holder} title={"Жахон адабиёти"} />
            <Categorycard img={holder2} title={"Узбек адабиёти"} />
            <Categorycard img={holder3} title={"Бизнес ва психология"} />
            <Categorycard img={holder4} title={"Болалар адабиёти "} />
            <Categorycard img={holder5} title={"Детективлар"} />
            <Categorycard img={holder6} title={"Фантастика"} />
          </ul>
        </h2>
      </div>
    </div>
  );
};
