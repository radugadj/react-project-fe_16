import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Header } from "./components";
import  StripeContainer  from "./components/Payment/StripeContainer";
import {
  Dashboard,
  Login,
  Signup,
  ForgotPassword,
  PrivateRoute,
  UpdateProfile,
} from "./components/Authentication/components";

import { AuthProvider } from "./components/Authentication/contexts/AuthContext";
import { Home, Cart } from "./pages";

import GlobalContextProvider from "./HOC/globalContext";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalContextProvider>
          <div className="wrapper">
            <Header />
            <div className="content">
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/dasboard" component={Dashboard} />
                  <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                  />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/" component={Home} exact />
                  <Route path="/cart" component={Cart} exact />
                  <Route path="/payment" component={StripeContainer } exact />
                </Switch>
              </AuthProvider>
            </div>
          </div>
        </GlobalContextProvider>
      </Router>
    </Provider>
  );
}

export default App;
