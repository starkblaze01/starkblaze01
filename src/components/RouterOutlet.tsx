import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Introduction from "./Introduction";

const RouterOutlet = (props: any) => (
  <Switch>
    <Route path="/" component={Introduction} />
    <Redirect to="/" />
  </Switch>
);

export default RouterOutlet;
