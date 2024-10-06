import React from "react";
import style from "./audio-books.module.scss";
import { AudioBooksCard } from "../audio-books-card/audio-books-card";
import audoi_products from "../../data/audio";
import { Link } from "react-router-dom";

export const Audiobooks = () => {
  return (
    <div className={style.Audiobooks}>
      <div className="container">
        <h2 className={style.title}>Аудио китоблар</h2>
        <ul className={style.list}>
          {audoi_products.map((item) => (
            <AudioBooksCard
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
