import React from "react";
import { useParams } from "react-router-dom";
import style from "./product.module.scss";
import new_products from "../../data/news";
import audio_products from "../../data/audio";

export const ProductItem = () => {
  const { id } = useParams();
  const data = [...new_products, ...audio_products];
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className={style.product_block}>
        <div>
          <img className={style.img} src={product.img} alt="img" />
        </div>
        <div className={style.item}>
          <div className={style.top}>
            <div className={style.text_wrap}>
              <h1 className={style.title}>{product.title}</h1>
              <p className={style.subtitle}>{product.genre}</p>
            </div>
            <div className={style.mid_box}>
              <div className={style.btn_wrap}>
                <a className={style.img_lk} href="#"></a>
                <a className={style.img_lk2} href="#"></a>
              </div>
              <p className={style.raiting}>{product.raiting}</p>
            </div>
            <div>
              <p className={style.comments}>235 Фикрлар</p>
            </div>
          </div>
          <p className={style.text}>{product.text}</p>
          <div className={style.char}>
            <div>
              <p className={style.chat_title}>Муаллиф</p>
              <p className={style.chatr_info}>{product.author}</p>
            </div>
            <div>
              <p className={style.chat_title}>Нашриёт</p>
              <p className={style.chatr_info}>{product.printed}</p>
            </div>
            <div>
              <p className={style.chat_title}>Йил</p>
              <p className={style.chatr_info}>{product.year}</p>
            </div>
          </div>
          <div className={style.buy_box}>
            <button className={style.buy}>Сотиб олиш - 65 000 сум</button>
            <button className={style.liten_buy}>
              Аудио тинглаш - 55 000 сум
            </button>
            <button className={style.online_buy}>
              Онлайн укиш - 45 000 сум
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
