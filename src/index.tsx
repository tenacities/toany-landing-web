import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as AlertProvider } from "react-alert";
import reportWebVitals from "./reportWebVitals";
// import smoothscroll from 'smoothscroll-polyfill';
import "./i18n";
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Privacy from './pages/privacy';

// smoothscroll.polyfill();

ReactDOM.render(
  <AlertProvider template={Alert} containerStyle={{pointerEvents: 'auto'}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/policy/privacy" element={<Privacy/>}/>
      </Routes>
    </BrowserRouter>
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
