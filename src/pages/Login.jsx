import React, { useState, useEffect } from "react";
import {Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Емайл не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Неверный Email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.lenght < 3 || e.target.value.lenght > 8) {
      setPasswordError("Пароль должен быть длиннее 3 и меньше 8 ");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
      <div className="content">
    <Form className="login__block">
      <h2>Войти в личный кабинет</h2>
      {emailDirty && emailError && (
        <div style={{ color: "red" }}>{emailError}</div>
      )}
      <Input
        onChange={(e) => emailHandler(e)}
        value={email}
        onBlur={(e) => blurHandler(e)}
        type="text"
        name="email"
        placeholder="Введите Email"
        prefix={<UserOutlined className="site-form-item-icon" />}
      />
      {passwordError && passwordDirty && (
        <div style={{ color: "red" }}>{passwordError}</div>
      )}
      <Input
        onChange={(e) => passwordHandler(e)}
        value={password}
        onBlur={(e) => blurHandler(e)}
        type="password"
        prefix={<LockOutlined className="site-form-item-icon" />}
        name="password"
        placeholder="Введите пароль"
      />
      <Form.Item>
      <button className="button_login" disabled={!formValid} type="submit">
        Войти
      </button>
      <div></div>
      <a href="/registration">Регистрация</a>
      </Form.Item>
      <Checkbox className="checkbox"> 
          Запомнить меня</Checkbox>
    </Form>
</div>
  );
};

export default LoginForm;
