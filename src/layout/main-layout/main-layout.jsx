import React from "react";
import { Header } from "../../pages/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../pages/footer/footer";

export const Mainlayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
