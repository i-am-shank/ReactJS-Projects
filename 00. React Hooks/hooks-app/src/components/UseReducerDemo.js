import "./UseReducerDemo.css";
import React, { useReducer } from "react";

export default function UseReducerDemo() {
    function reducer(count, action) {
        if (action === "+1") {
            return count + 1;
        } else if (action === "+5") {
            return count + 5;
        } else if (action === "-5") {
            return count - 5;
        } else if (action === "-1") {
            return count - 1;
        } else if (action === "*4") {
            return count * 4;
        } else if (action === "/4") {
            return count / 4;
        } else {
            // an action which isn't documented
            return count; // not doing anything for this case
        }
    }

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="content">
            <h1 className="demo-heading">useReducer Demo :-</h1>

            <div className="demo">
                <button
                    className="operation-btn"
                    onClick={() => dispatch("/4")}
                >
                    /4
                </button>
                <button
                    className="operation-btn"
                    onClick={() => dispatch("-5")}
                >
                    -5
                </button>
                <button
                    className="operation-btn"
                    onClick={() => dispatch("-1")}
                >
                    -1
                </button>
                <div className="value">{count}</div>
                <button
                    className="operation-btn"
                    onClick={() => dispatch("+1")}
                >
                    +1
                </button>
                <button
                    className="operation-btn"
                    onClick={() => dispatch("+5")}
                >
                    +5
                </button>
                <button
                    className="operation-btn"
                    onClick={() => dispatch("*4")}
                >
                    *4
                </button>
            </div>
        </div>
    );
}
