import "./UseContextDemo.css";
import Parent from "./Parent";

import React from "react";
import AppContext1Provider from "../context/AppContext1";

export default function UseContextDemo() {
    return (
        <div className="content">
            <h1 className="demo-heading">useContext Demo :-</h1>

            <div className="demo">
                <AppContext1Provider>
                    <Parent />
                </AppContext1Provider>
            </div>
        </div>
    );
}
