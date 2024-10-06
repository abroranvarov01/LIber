import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./pages/Header";
import { Mainlayout } from "./layout/main-layout/main-layout";
import { Home } from "./pages/home/home";
import { ProductItem } from "./pages/product/product";
import { Profile } from "./pages/profile/profile";
import { ProfileSubscribe } from "./components/profile-subscribe/profile-subscribe";
import { Eprice } from "./components/e-price/e-price";
import { MyBooks } from "./components/my-books/my-books";
import { Save } from "./components/save/save";
import { ProfleSettings } from "./components/profle-settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="profile" element={<Profile />}>
            <Route index path="subscribe" element={<ProfileSubscribe />} />
            <Route path="e-price" element={<Eprice />} />
            <Route path="my-books" element={<MyBooks />} />
            <Route path="save" element={<Save />} />
            <Route path="settings" element={<ProfleSettings />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
