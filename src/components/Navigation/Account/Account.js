import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AuthForm from "./AuthForm/AuthForm";

import styles from "./Account.module.css";

const Account = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.Account}>
      <AccountCircleOutlinedIcon onClick={() => setShow(!show)} />
      <AuthForm show={show} isAuth={false} />
    </div>
  );
};

export default Account;
