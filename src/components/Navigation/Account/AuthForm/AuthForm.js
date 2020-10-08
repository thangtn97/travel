import React from "react";
import styles from "./AuthForm.module.css";

const AuthForm = (props) => {
  const authForm = !props.isAuth ? (
    <div className={styles.FormLogin}>
      <form className={styles.Form}>
        <h4>Login to your account</h4>
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Your password" />
        <button>Log in</button>
      </form>
      <span>Forgot ?</span>
      <h4>Create an account</h4>
    </div>
  ) : (
    <ul className={styles.FormLogged}>
      <p>Xem tiểu sử</p>
      <p>Thông tin tài khoản</p>
      <p>Đăng xuất</p>
    </ul>
  );

  return props.show ? authForm : null;
};

export default AuthForm;
