import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { Block, Button } from "../../../components";

import "antd/dist/antd.css";

const validate = (key, touched, errors) => {
  if (touched[key]) {
    if (errors[key]) {
      return "error";
    } else {
      return "succes";
    }
  } else {
    return "";
  }
};
const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в ваш аккаунт</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={validate("email", touched, errors)}
            help={!touched.email ? "" : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              prefix={
                <MailOutlined
                  type="mail"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              size="large"
              placeholder="E-Mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            help={!touched.password ? "" : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={
                <LockOutlined
                  type="lock"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              size="large"
              type="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              size="large"
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/reg">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
