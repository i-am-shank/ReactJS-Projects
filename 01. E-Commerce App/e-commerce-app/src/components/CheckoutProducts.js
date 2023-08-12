import React from "react";

import { Star } from "@mui/icons-material";
import "./CheckoutProducts.css";

import { StateContext } from "../context/StateProvider";
import { useContext } from "react";

export default function CheckoutProducts({ item }) {
    const { dispatch } = useContext(StateContext);

    function RemoveFromBasket() {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: item.id,
        });
    }

    console.log("In CheckoutProducts.js :-");
    console.log(item);

    return (
        <div className="checkoutProduct">
            <img src={item.image} alt="" className="checkoutProduct-image" />

            <div className="checkoutProduct-info">
                {/* title, price, rating, remove-btn */}
                <p className="checkoutProduct-title">{item.title}</p>

                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>

                <div className="checkoutProduct-rating">
                    {Array(item.rating)
                        .fill()
                        .map((star, index) => (
                            <Star className="text-yellow-500" key={index} />
                        ))}
                </div>

                <button
                    className="add-to-basket-btn"
                    onClick={() => RemoveFromBasket()}
                >
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}
