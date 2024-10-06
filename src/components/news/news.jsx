import React from "react";
import style from "./news.module.scss";
import new_products from "../../data/news";
import { News_item } from "../news_item/news_item";

export const News = () => {
  return (
    <div className={style.news}>
      <div className="container">
        <h2 className={style.title}>Янги қўшилганлар</h2>
        <ul className={style.list}>
          {new_products.map((item) => (
            <News_item
              id={item.id}
              key={item.id}
              img={item.img}
              title={item.title}
              genre={item.genre}
              raiting={item.raiting}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
