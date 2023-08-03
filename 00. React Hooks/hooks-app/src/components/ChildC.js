import "./ChildC.css";

import { useContext } from "react";
import { AppContext1 } from "../context/AppContext1";

export default function ChildC() {
    const { data1, increment5, decrement5 } = useContext(AppContext1);

    return (
        <div className="child">
            <button onClick={decrement5} className="operation-btn">
                -5
            </button>
            <p>{data1}</p>
            <button onClick={increment5} className="operation-btn">
                +5
            </button>
        </div>
    );
}
