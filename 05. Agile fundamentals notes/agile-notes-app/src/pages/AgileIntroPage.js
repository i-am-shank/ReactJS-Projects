import "./AgileIntroPage.css";

import AgilePrinciples from "../content/AgilePrinciples";
import Principle from "../components/Principle";

export default function AgileIntroPage() {
    return (
        <div className="agile-intro-wrapper">
            <div className="agile-intro">
                <div className="agile-values">
                    <div className="header">4 Values of Agile :</div>
                    <ul className="values-list">
                        <li className="list-item">
                            <span className="topic">
                                Individuals & Interaction
                            </span>
                            <span>over</span>
                            <span className="topic">Processes & Tools</span>
                        </li>
                        <li className="list-item">
                            <span className="topic">Working Software</span>
                            <span>over</span>
                            <span className="topic">
                                Comprehensive Documentation
                            </span>
                        </li>
                        <li className="list-item">
                            <span className="topic">
                                Customer Collaboration
                            </span>
                            <span>over</span>
                            <span className="topic">Contract Negotiation</span>
                        </li>
                        <li className="list-item">
                            <span className="topic">Responding to Change</span>
                            <span>over</span>
                            <span className="topic">Following a Plan</span>
                        </li>
                    </ul>
                </div>
                <div className="agile-principles">
                    <div className="header">12 Agile Principles :</div>
                    <div className="principles-list">
                        {AgilePrinciples.map((item, index) => (
                            <Principle
                                title={item.title}
                                content={item.content}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
