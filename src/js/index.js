import React from "react";
import store from "../js/store/index";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "../js/components/App.js";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)