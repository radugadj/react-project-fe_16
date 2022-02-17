import React from "react";
import { Form, Icon, Imput } from "antd";
import { Block, Button } from "components";


import "./Auth.scss";

const Auth = () => (
  <div className="auth">
          <h1>Войти в аккаунт</h1>
          <p>Пожалуйста, войдите в свой аккаунт</p>
      <Block>
        <Button type="primary" size="large">
          Click here
        </Button>
      </Block>
  </div>
);

export default Auth;
