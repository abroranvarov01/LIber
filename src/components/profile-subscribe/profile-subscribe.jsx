import React from "react";
import style from "./profile-subscribe.module.scss";

export const ProfileSubscribe = () => {
  return (
    <div>
      <div className={style.Banner}>
        <h2 className={style.banner_title}>
          Узингиз севган булимга обуна бўлинг
        </h2>
      </div>
      <div className={style.text_block}>
        <h2 className={style.title}>Обуна</h2>
        <div className={style.wrap}>
          <div className={style.param}>
            <div className={style.sel_block}>
              <p className={style.sub_title}>Обуна давом этиш вакти</p>
              <p className={style.select}>30 кун</p>
            </div>
            <div className={style.sel_block}>
              <p className={style.sub_title}>Булимни танланг</p>
              <p className={style.select}>Фантастика</p>
            </div>
            <h3 className={style.sub_time}>Обуна 30 кун давом этади</h3>
          </div>
          <div className={style.subscribe}>
            <div className={style.info}>
              <div className={style.info_wrap}>
                <p className={style.info_title}>Бошланиш вакти</p>
                <p className={style.info_text}>12/09/2021</p>
              </div>
              <div className={style.info_wrap}>
                <p className={style.info_title}>Якунланиш вакти</p>
                <p className={style.info_text}>12/09/2021</p>
              </div>
              <div className={style.info_wrap3}>
                <p className={style.info_title}>Обуна нархи</p>
                <p className={style.info_textc}>12 000 сум</p>
              </div>
            </div>
            <button className={style.button}>Обуна булиш</button>
          </div>
        </div>
      </div>
    </div>
  );
};
