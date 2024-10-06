import React from "react";
import { Headerinput } from "../../components/header-input/header-input";
import style from "./heaader.module.scss";
import { Headersignlink } from "../../components/header-sign-link/header-sign-link";
import { Header_setions } from "../../components/header_setions/header_setions";

export const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <div className="container">
          <div className={style.wrap}>
            <Headerinput />
            <Headersignlink />
          </div>
        </div>
      </div>
      <Header_setions />
    </div>
  );
};
