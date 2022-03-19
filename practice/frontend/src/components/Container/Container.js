import React from "react";
import ContainerSCSS from "./Container.module.scss";

// --- Container --- //

export default function Container(props) {
  return <div className={ContainerSCSS.container}>{props.children}</div>;
}
