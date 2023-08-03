import "./UseEffectDemo.css";
import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    // As there is no dependency-array listed, re-render happens on every change in component.
    // And, then change is happening every 1000 mili-seconds, so there is no other way to show thses changes on UI, except managing the side-effect

    // Side-effect here is updation of DOM, as function's main task is updating the variable's value every second.

    return (
        <div className="content">
            <h1 className="demo-heading">useEffect Demo :-</h1>

            <div className="demo">
                <p>Total duration = {count} seconds.</p>
            </div>
        </div>
    );
}
