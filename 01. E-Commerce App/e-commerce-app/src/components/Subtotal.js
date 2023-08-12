import React from "react";
import "./Subtotal.css";

import { StateContext } from "../context/StateProvider";
import { useContext } from "react";
import { getBasketTotal } from "../reducers/reducer1";

export default function Subtotal() {
    const { state } = useContext(StateContext);
    var totalCost = getBasketTotal(state.basket);
    var itemCount = state.basket.length;

    return (
        <div className="subtotal">
            <div>
                <p>
                    Subtotal ({itemCount} items): <strong>{totalCost}</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox" className="subtotalInput" /> This
                    order contains a gift
                </small>
            </div>

            <button className="subtotalButton">Proceed to Checkout</button>
        </div>
    );
}
