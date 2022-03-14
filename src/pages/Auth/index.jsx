import React from "react";
import { Route, Switch } from "react-router-dom";

import { LoginForm, RegisterForm } from "../../modules";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route exact path="/reg">
          <RegisterForm />
        </Route>
      </Switch>
    </div>
  </section>
);

export default Auth;
