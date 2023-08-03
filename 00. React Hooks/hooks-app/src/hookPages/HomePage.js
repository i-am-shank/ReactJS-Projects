import "./HomePage.css";

import { Helmet } from "react-helmet";
import titles from "./titles";

import { NavLink } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="container">
            <NavLink to="/introduction" className="intro-btn">
                <button className="btn">Hooks Introduction</button>
            </NavLink>

            <div className="flex justify-center items-center gap-6 w-full">
                <Helmet>
                    <title>{titles.HomePage}</title>
                </Helmet>

                <h2 className="home-left">
                    <h2 className="heading">React JS Hooks</h2>
                </h2>

                <div className="links">
                    <NavLink to="/usestate">
                        <button className="btn">UseState hook</button>
                    </NavLink>
                    <br />
                    <NavLink to="/useeffect">
                        <button className="btn">UseEffect hook</button>
                    </NavLink>
                    <br />
                    <NavLink to="/useref">
                        <button className="btn">UseRef hook</button>
                    </NavLink>
                    <br />
                    <NavLink to="/usecontext">
                        <button className="btn">UseContext hook</button>
                    </NavLink>
                    <br />
                    <NavLink to="/usereducer">
                        <button className="btn">UseReducer hook</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
