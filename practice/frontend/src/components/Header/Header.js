import React, { useState, useEffect } from "react";
import NavBar from "../Nav/NavBar";
import SideBar from "../Nav/SideBar";

import HeaderSCSS from "./Header.module.scss";

// --- Header --- //

export default function Header({ title }) {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });
  return (
    <header className={HeaderSCSS.Header}>
      <h1>{title}</h1>
      {width > 768 ? <NavBar /> : <SideBar />}
    </header>
  );
}
