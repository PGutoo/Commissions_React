import React from "react";
import { Route, Switch } from "react-router-dom";

import Centro from "../view/Home/Centro";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Centro} />
    </Switch>
  );
}
