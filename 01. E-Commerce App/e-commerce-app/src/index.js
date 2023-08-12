import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import StateProvider from "./context/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StateProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StateProvider>
);
