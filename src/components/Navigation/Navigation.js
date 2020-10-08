import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import styles from "./Navigation.module.css";
import Account from "./Account/Account";

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <NavigationItems />
      <Account />
    </div>
  );
};

export default Navigation;
