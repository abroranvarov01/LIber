import React from "react";
import style from "./profile.module.scss";
import { ProfileCard } from "../../components/profile-card/profile-card";
import { Link, Outlet } from "react-router-dom";
import { ProfileSections } from "../../components/profile-sections/profile-sections";

export const Profile = () => {
  return (
    <div className={style.Profile}>
      <div className="container">
        <ProfileCard />
        <div className={style.block}>
          <ProfileSections />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
