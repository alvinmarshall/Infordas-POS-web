import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./app/store/configStore";
import setAuthToken from "./components/Auth/Login/setAuthToken";
import {
  logoutUser,
  setCurrentUser
} from "./components/Auth/reducers/authAction";
const rootEl = document.getElementById("root");
const store = configureStore();
if (localStorage.auth_token) {
  setAuthToken(localStorage.auth_token);
  const decoded = jwt_decode(localStorage.auth_token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    console.log("expired")
    store.dispatch(logoutUser());
    window.location.href = "/"
  }
}
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
