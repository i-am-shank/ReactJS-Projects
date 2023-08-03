import "./UseRefDemo.css";
import React, { useRef, useState } from "react";

export default function UseRefDemo() {
    const [name, setName] = useState("enter some text");

    const refElement = useRef("");
    console.log(refElement);
    // {current: ""}
    // using this current-key, can manipulate DOM, all HTML field functionality can be achieved.

    function changeHandler(e) {
        setName(e.target.value);
    }

    function reset() {
        refElement.current.value = "";
        // Clicking reset-button also removes focus from input-button
        refElement.current.focus();
        // If we want focus back to input-field, on clicking reset-button --> will use useRef hook
    }

    function handleInput() {
        refElement.current.style.color = "blue";
        refElement.current.value = "Color & value changed";
    }

    return (
        <div className="content">
            <h1 className="demo-heading">useRef Demo</h1>

            <div className="demo">
                <button onClick={handleInput} className="operation-btn">
                    Change Color
                </button>

                <input
                    ref={refElement}
                    type="text"
                    value={name}
                    onChange={changeHandler}
                    className="input-ref"
                ></input>

                <button onClick={reset} className="operation-btn">
                    Reset & Focus
                </button>
            </div>
        </div>
    );
}
