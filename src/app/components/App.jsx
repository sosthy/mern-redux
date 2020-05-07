import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";
import PageNotFound from "./PageNotFound";
import Header from "./commons/header/Header";

const App = (props) => (
  <div className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
