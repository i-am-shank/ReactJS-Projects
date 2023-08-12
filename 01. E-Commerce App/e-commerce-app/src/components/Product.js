import React from "react";

import "./Product.css";
import { Star } from "@mui/icons-material";

import { StateContext } from "../context/StateProvider";
import { useContext } from "react";

export default function Product(props) {
    const { dispatch } = useContext(StateContext);

    function addToBasket() {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                image: props.image,
                price: props.price,
                rating: props.rating,
                title: props.title,
            },
        });
    }

    return (
        <div>
            <div className="product">
                {/* info, price, rating, img */}
                <div className="product-info">
                    <p>{props.title}</p>
                    <p className="product-price mt-1">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product-rating flex">
                        {Array(props.rating)
                            .fill()
                            .map((star, index) => (
                                <Star className="text-yellow-500" key={index} />
                            ))}
                    </div>
                </div>
                <img
                    src={props.image}
                    alt="product_image"
                    className="product-image"
                />
                <button
                    className="add-to-basket-btn"
                    onClick={() => addToBasket()}
                >
                    Add to Basket
                </button>
            </div>
        </div>
    );
}
