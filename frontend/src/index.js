import App from "./App";
import { render } from "react-dom";
import React from "react";

const appDiv = document.getElementById("app");
render(
    <div className="app">
        <App />
    </div>
    , appDiv);