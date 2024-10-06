import React from "react";
import style from "./home.module.scss";
import { Hero } from "../../components/hero";
import { Advantage } from "../../components/advantage/advantage";
import { Category } from "../../components/category/category";
import { News } from "../../components/news/news";
import { Audiobooks } from "../../components/audio-books/audio-books";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Advantage />
      <Category />
      <News />
      <Audiobooks />
    </div>
  );
};
