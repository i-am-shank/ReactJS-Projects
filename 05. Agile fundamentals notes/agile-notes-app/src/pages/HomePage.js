import { NavLink } from "react-router-dom";
import "./HomePage.css";

/*
    Agile Introduction :
        4 Agile Values
        12 Agile Principles
    Agile Frameworks :
        Scrum
        Kanban
        Scrumban
    More About Agile :
        Challenges in Agile
        Estimation in Agile
        Other Agile Roles
*/

export default function HomePage() {
    return (
        <div className="homePage-wrapper">
            <div className="homePage">
                <div className="header">Agile Fundamentals :</div>
                <NavLink to="/introduction" className="page-box">
                    <div className="link-text">Agile Introduction</div>
                </NavLink>
                <NavLink to="/agileterms" className="page-box">
                    <div className="link-text">Important terms of Agile</div>
                </NavLink>
                <NavLink to="/moredetails" className="page-box">
                    More about Agile
                </NavLink>
                <div className="agile-frameworks">
                    <div className="definition">
                        Following are 3 popular frameworks of Agile :
                        <ul className="frameworks-list">
                            <li className="list-item2">
                                <NavLink to="/scrum" className="sub-page-box">
                                    <div className="link-text2">Scrum</div>
                                </NavLink>
                            </li>
                            <li className="list-item2">
                                <NavLink to="/kanban" className="sub-page-box">
                                    <div className="link-text2">Kanban</div>
                                </NavLink>
                            </li>
                            <li className="list-item2">
                                <NavLink
                                    to="/scrumban"
                                    className="sub-page-box"
                                >
                                    <div className="link-text2">Scrumban</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
