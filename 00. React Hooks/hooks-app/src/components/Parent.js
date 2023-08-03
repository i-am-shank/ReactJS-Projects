import { AppContext1 } from "../context/AppContext1";
import { useContext } from "react";
import ChildA from "./ChildA";

import "./Parent.css";

export default function Parent() {
    const { data1, setData1 } = useContext(AppContext1);

    function decrement10() {
        setData1(data1 - 10);
    }

    function increment10() {
        setData1(data1 + 10);
    }

    // updating data1 in parent
    // will show in 3-level down child, where this value is printed.
    // Controlling the same-data in 2-different levels (+10 & -10 --> parent  ,  +5 & -5 --> childC)
    // Parent --> ChildA --> ChildB --> ChildC

    return (
        <div className="parent">
            <ChildA />
            <div className="parent-btns">
                <button onClick={decrement10} className="operation-btn">
                    -10
                </button>
                <p>-- Parent buttons --</p>
                <button onClick={increment10} className="operation-btn">
                    +10
                </button>
            </div>
        </div>
    );
}
