import React, { useState } from "react";
import "./LoginPage.css";
import { NavLink } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <NavLink to="/" style={{ textDecoration: "none" }}>
                <div className="login-logo">
                    <StorefrontIcon
                        className="login-logoImage"
                        fontSize="large"
                    />
                    <h2 className="login-logo-title">eShop</h2>
                </div>
            </NavLink>

            <div className="login-container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="login-signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in, you agree to the eShop terms & conditions of
                    use & sale. Please see our Privacy Notice, Cookies notice
                    and our Interest-based ads notice.
                </p>

                <button className="login-registerButton">
                    Create your eShop Account
                </button>
            </div>
        </div>
    );
}
