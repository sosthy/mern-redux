import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import PageNotFound from "./PageNotFound";
import { connect } from "react-redux";

const App = (props) => (
  <div className="container">
    <h1>Welcome APP</h1>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
