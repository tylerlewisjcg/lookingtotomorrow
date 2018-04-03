import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './stylesheets/main.css';
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

