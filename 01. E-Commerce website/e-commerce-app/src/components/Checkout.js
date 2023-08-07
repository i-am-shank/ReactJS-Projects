import React from "react";
import "./Checkout.css";

// Components -------------------
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

import { StateContext } from "../context/StateProvider";
import { useContext } from "react";

export default function Checkout() {
    const { state } = useContext(StateContext);

    console.log("In Checkout.js :-");
    console.log(state);

    return (
        <div className="checkout">
            <div className="checkout-left">
                {/* image, header */}
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    className="checkout-ad"
                    alt=""
                />
                <h2 className="checkout-title">Your Shopping Basket</h2>
                {/* Products :- */}
                {state.basket.map((item, index) => (
                    <CheckoutProducts
                        key={item.id}
                        item={state.basket[index]}
                    />
                ))}
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    );
}
