import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";
import PageNotFound from "./others/PageNotFound";
import Header from "../components/commons/header/Header";
import "./App.scss";
import UserPage from "./user/UserPage";
import RolePage from "./role/RolePage";

const App = () => {
  const { t, i18n } = useTranslation();
  const [langKey, setLangKey] = useState(i18n.language);

  const changeLanguage = (lang) => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
      setLangKey(i18n.language);
    }
  };

  return (
    <div className="container">
      <Header changeLanguage={changeLanguage} langKey={langKey} />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/users" component={UserPage} />
        <Route path="/roles" component={RolePage} />
        <Route component={PageNotFound} />
      </Switch>
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
    </div>
  );
};

export default App;
