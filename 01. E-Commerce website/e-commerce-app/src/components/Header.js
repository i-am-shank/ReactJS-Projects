import React from "react";

import "./Header.css";

// Material UI ------------------
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

// React Router -------------------
import { NavLink } from "react-router-dom";

import { StateContext } from "../context/StateProvider";
import { useContext } from "react";

export default function Header() {
    const { state } = useContext(StateContext);

    return (
        <div className="header">
            {/* Logo */}
            <NavLink to="/" className="complete-logo">
                <div className="header-logo">
                    <StorefrontIcon
                        className="header-logo-image"
                        fontSize="large"
                    />
                    <h2 className="header-logo-title">eShop</h2>
                </div>
            </NavLink>

            {/* Search bar */}
            <div className="header-search">
                <input type="text" className="header-searchInput"></input>
                <SearchIcon className="header-searchIcon" />
            </div>
            {/* Navigation part */}
            <div className="header-nav">
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                    <div className="nav-item">
                        <span className="nav-item1">Hello Guest</span>
                        <span className="nav-item2">Sign In</span>
                    </div>
                </NavLink>

                <div className="nav-item">
                    <span className="nav-item1">Your</span>
                    <span className="nav-item2">Shop</span>
                </div>

                <NavLink to="/checkout">
                    <div className="itemBasket">
                        <ShoppingBasketIcon />
                        <span className="nav-item2 nav-basketCount">
                            {state.basket.length}
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}
