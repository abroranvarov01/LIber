import React from "react";
import Logo from "../../assets/logo.svg";
import style from "./header-input.module.scss";

export const Headerinput = () => {
  return (
    <div>
      <div className={style.wrap}>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <div className={style.input_wrap}>
          <div className={style.select}>
            <p className={style.sel_text}>Рукнлар</p>
          </div>
          <form className={style.form}>
            <input placeholder="Қидириш" className={style.input} type="text" />
            <button className={style.btn}>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
