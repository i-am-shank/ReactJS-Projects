import "./Navigation.css";

import { NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

export default function Navigation() {
    return (
        <div className="nav">
            <div className="nav-top">
                <div className="nav-top-wrapper">
                    <span className="nav-top-left">
                        Trained Aesop consultations are available to provide
                        bespoke skin care advise. &nbsp; &nbsp;
                    </span>
                    <span className="nav-top-right">
                        Book a video consultation
                    </span>
                </div>
            </div>

            <div className="nav-mid">
                <span className="nav-mid-left">
                    Click and Collect is now available at Hong Kong stores.
                    Enjoy complimentary shipping on orders over HK$400
                </span>
                <span className="nav-mid-right">+</span>
            </div>

            <div className="nav-bottom">
                <span className="nav-bottom-left nav-bottom-left-lg nav-bottom-sec">
                    <NavLink to="/">Skin Care</NavLink>
                    <NavLink to="/">Body & Hand</NavLink>
                    <NavLink to="/">Hair</NavLink>
                    <NavLink to="/">Fragrance</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Kits & Travel</NavLink>
                    <NavLink to="/">Gifts</NavLink>
                    <NavLink to="/">Read</NavLink>
                    <NavLink to="/">Stores</NavLink>
                    <NavLink to="/">Facial Appointments</NavLink>
                    <NavLink to="/">
                        <SearchIcon />
                    </NavLink>
                </span>
                <span className="nav-bottom-left nav-bottom-left-md nav-bottom-sec">
                    <NavLink to="/">Shop</NavLink>
                    <NavLink to="/">Read</NavLink>
                    <NavLink to="/">Stores</NavLink>
                    <NavLink to="/">
                        <SearchIcon />
                    </NavLink>
                </span>
                <span className="nav-bottom-right nav-bottom-sec">
                    <NavLink to="/">Log in</NavLink>
                    <NavLink to="/">Cabinet</NavLink>
                    <NavLink to="/">Cart</NavLink>
                </span>
            </div>
        </div>
    );
}
