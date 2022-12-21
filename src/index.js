import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import ShopTwo from "./pages/ShopTwo";
import Userpage from "./pages/Userpage";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultnoti`}
            component={Notification}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultsettings`}
            component={Settings}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultmessage`}
            component={Chat}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop2`}
            component={ShopTwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/userpage`}
            component={Userpage}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
