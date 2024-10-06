import React from "react";
import style from "./footer-address.module.scss";
import facebook from "../../assets/icon-img/facebook.svg";
import insta from "../../assets/icon-img/insta.svg";
import tgram from "../../assets/icon-img/tgram.svg";
import tt from "../../assets/icon-img/tt.svg";
import yt from "../../assets/icon-img/yt.svg";
import payment from "../../assets/Payment.svg";
import payment2 from "../../assets/Payment2.svg";
import payment3 from "../../assets/Payment3.svg";

export const FooterAddress = () => {
  return (
    <div className={style.FooterAddress}>
      <div className="container">
        <div className={style.wrap}>
          <ul className={style.main_list}>
            <li>
              <ul className={style.list}>
                <li>
                  <h3 className={style.title}>Ижтимоий тармоқлар</h3>
                </li>
                <li>
                  <ul className={style.mes_list}>
                    <li>
                      <a href="#">
                        <img src={facebook} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={yt} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={tt} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={tgram} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={insta} alt="" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <h3 className={style.title}>Боғланиш</h3>
              <div className={style.link_wrap}>
                <a className={style.link} href="#">
                  +998 90 253 77 53
                </a>
                <a className={style.link} href="#">
                  support@liber.uz
                </a>
              </div>
            </li>
          </ul>
          <div>
            <h3 className={style.title}>Биз қабул қиламиз</h3>
            <ul className={style.pay_list}>
              <li>
                <a href="#">
                  <img src={payment} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={payment2} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={payment} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
