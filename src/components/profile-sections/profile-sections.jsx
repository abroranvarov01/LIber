import React, { useState } from "react";
import style from "./profile-sections.module.scss";
import { Link } from "react-router-dom";

export const ProfileSections = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  const items = [
    {
      path: "/profile/subscribe",
      text: "Обуна бўлиш",
      className: style.link_text,
    },
    { path: "/profile/e-price", text: "Э-Хисоб", className: style.link_text2 },
    {
      path: "/profile/my-books",
      text: "Китобларим",
      className: style.link_text3,
    },
    {
      path: "/profile/save",
      text: "Сақланганлар",
      className: style.link_text4,
    },
    {
      path: "/profile/settings",
      text: "Созламалар",
      className: style.link_text5,
    },
    { path: "#", text: "Тунги режим", className: style.link_text6 },
  ];

  return (
    <ul className={style.list}>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>
            <p
              onClick={() => handleClick(index)}
              className={`${item.className} ${
                activeLink === index ? style.active : ""
              }`}
            >
              {item.text}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
