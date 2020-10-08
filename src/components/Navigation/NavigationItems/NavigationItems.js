import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import styles from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem>Trang chủ</NavigationItem>
      <NavigationItem>Khách sạn</NavigationItem>
      <NavigationItem>Chuyến bay</NavigationItem>
      <NavigationItem>Blog</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
