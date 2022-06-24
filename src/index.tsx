import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as AlertProvider } from "react-alert";
import reportWebVitals from "./reportWebVitals";
// import smoothscroll from 'smoothscroll-polyfill';
import "./i18n";
import Alert from './components/Alert';

// smoothscroll.polyfill();

ReactDOM.render(
  <AlertProvider template={Alert} containerStyle={{pointerEvents: 'auto'}}>
    <App />,{/*// <React.StrictMode>*/}
    {/*//   <App />*/}
    {/*// </React.StrictMode>*/}
  </AlertProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
