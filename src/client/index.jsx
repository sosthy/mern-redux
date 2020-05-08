import React, { Suspense } from "react";
import { render } from "react-dom";
import "./index.scss";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import configureStore from "./redux/configureStore";
import App from "./pages/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Loader from "./components/loader/Loader";

import "./i18n";

const store = configureStore();

render(
  <Suspense fallback={<Loader />}>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </Suspense>,
  document.getElementById("app")
);
