import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Block, Button } from '../../../components';

import 'antd/dist/antd.css';
class LoginForm extends Component {
    render() {
        return (
          <div>
            <div className="auth__top">
              <h2>Войти в аккаунт</h2>
              <p>Пожалуйста, войдите в аккаунт</p>
            </div>
            <Block>
              <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item validateStatus="success" hasFeedback>
                <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Ваше имя"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  size="large"
                  type="password"
                  placeholder="Ваш пароль"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large">
                  Войти в аккаунт
                </Button>
              </Form.Item>
              <Link className="auth__register-link" to="/reg">
                Зарегестрироваться
              </Link>
            </Form>
          </Block>
          </div>
        );
    }
}

export default LoginForm;