import React, { Component } from 'react';
import { Form, Input } from 'antd';
import Icon from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';


import { Block, Button, FormField } from '../../../components';

import 'antd/dist/antd.css';

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

const success = false;
const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
          validateStatus={
            !touched.email ? "" : errors.email ? "errors" : "success"
          }
            help={!touched.email ? "" : errors.email}
            hasFeedback
          >
              <Input
                id="email"
                prefix={
                  <MailOutlined type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="E-Mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <UserOutlined type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item
              help={!touched.password ? "" : errors.password}
              hasFeedback
            >
              <Input
                id="password"
                prefix={
                  <LockOutlined type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
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
              <Input
                id="password_2"
                prefix={
                  <LockOutlined type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                type="password"
                placeholder="Повторите пароль"
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
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <Icon type="info-circle" theme="twoTone" />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;