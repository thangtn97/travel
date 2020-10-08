import React from "react";
import styles from "./Banner.module.css";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className={styles.Banner}
      style={{ backgroundImage: `url(${require("../../assets/banner.jpg")}` }}
    ></div>
  );
};

export default Banner;
