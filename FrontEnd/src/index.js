import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const initialOptions = {
  clientId:
    "ATj2bPbR4OKB77hcGUmKLIeXHpQGj-qBVzWwVLN1_1RCpgMddmi4GK5rtZRjhws_WAFGmxvtXpnZhkRg",
  currency: "EUR",
  intent: "capture",
};
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
