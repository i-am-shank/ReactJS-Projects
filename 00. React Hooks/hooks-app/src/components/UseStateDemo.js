import "./UseStateDemo.css";

import { useState, React } from "react";

export default function UseStateDemo() {
    const [count, setCount] = useState(0);

    function decrementHandler() {
        setCount(count - 1);
    }

    function incrementHandler() {
        setCount(count + 1);
    }

    return (
        <div className="content">
            <h1 className="demo-heading">useState Demo :-</h1>

            <div className="demo">
                <button className="operation-btn" onClick={decrementHandler}>
                    Decrement
                </button>
                <div className="value">{count}</div>
                <button className="operation-btn" onClick={incrementHandler}>
                    Increment
                </button>
            </div>
        </div>
    );
}
