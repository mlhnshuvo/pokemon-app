import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import "./assets/css/styles.css";
import "./assets/css/responsive.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
