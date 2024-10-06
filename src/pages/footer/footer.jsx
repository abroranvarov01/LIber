import React from "react";
import style from "./footer.module.scss";
import { FooterAbout } from "../../components/footer-about";
import { FooterAddress } from "../../components/footer-address/footer-address";

export const Footer = () => {
  return (
    <div>
      <FooterAbout />
      <FooterAddress />
    </div>
  );
};
