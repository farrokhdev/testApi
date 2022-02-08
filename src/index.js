import React from "react";
import ReactDOM from "react-dom";
// STYLES
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./styles/main.css";
import "./styles/modal.scss";
import "./styles/layout.scss";
import "./styles/login.scss";
import "./styles/error.scss";
// STYLES END
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./context/MainContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <ConfigProvider direction="rtl">
          <App />
        </ConfigProvider>
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
