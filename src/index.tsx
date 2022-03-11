import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "./i18n";

ReactDOM.render(
  <App />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.post = {
  "Content-Type": "application/json",
};
