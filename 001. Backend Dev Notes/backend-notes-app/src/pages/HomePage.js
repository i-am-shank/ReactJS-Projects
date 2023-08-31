import { NavLink } from "react-router-dom";
import "./HomePage.css";
import { Helmet } from "react-helmet";
import titles from "./titles";

export default function HomePage() {
    return (
        <div className="HomePage">
            <Helmet>
                <title>{titles.HomePage}</title>
            </Helmet>

            <h1>Backend Development</h1>

            <div className="topics">
                <NavLink to="/introduction" className="topic">
                    <button className="topic-btn">Introduction</button>
                </NavLink>{" "}
                <br />
                <NavLink to="/server-creation" className="topic">
                    <button className="topic-btn">Server Creation</button>
                </NavLink>
            </div>
        </div>
    );
}
