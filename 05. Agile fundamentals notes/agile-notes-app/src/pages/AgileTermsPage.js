import "./AgileTermsPage.css";

export default function AgileTermsPage() {
    return (
        <div className="agile-terms-wrapper">
            <div className="agile-terms">
                <div className="estimating-wrapper">
                    <div className="estimating">
                        <div className="header">Estimating :</div>
                        <div className="definition">
                            Roughly calculating, how long it's going to take us
                            to complete a task.
                        </div>
                    </div>

                    <div className="estimating-diff">
                        <div className="sub-header">
                            Difference between Agile & Non-Agile Estimating :
                        </div>
                        <div className="estimating-diff-content">
                            <div className="agile-estimating">
                                <div className="topic">Agile Estimating :</div>
                                <ul className="agile-estimating-list">
                                    <li className="list-item2">
                                        Relative estimate, within a project
                                    </li>
                                    <li className="list-item2">
                                        Estimated items are placed into a
                                        bucket.
                                    </li>
                                    <li className="list-item2">
                                        Updates usually cause minor impacts.
                                    </li>
                                </ul>
                            </div>
                            <div className="non-agile-estimating">
                                <div className="topic">
                                    Non-Agile Estimating :
                                </div>
                                <ul className="non-agile-estimating-list">
                                    <li className="list-item2">
                                        Absolute estimate
                                    </li>
                                    <li className="list-item2">
                                        Estimation is done in terms of days.
                                    </li>
                                    <li className="list-item2">
                                        Updates usually cause major impacts.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="estimating-reasons">
                        <div className="sub-header">Why Estimate ?</div>
                        <ul className="reasons-list">
                            <li className="list-item2">
                                Provides estimated duration.
                            </li>
                            <li className="list-item2">
                                Drives out clarification questions.
                            </li>
                            <li className="list-item2">
                                Highlights comples & high risk tasks.
                            </li>
                        </ul>
                    </div>

                    <div className="estimation-techniques">
                        <div className="sub-header">
                            Estimation Techniques :
                        </div>
                        <ul className="techniques-list">
                            <li className="list-item2">
                                <span className="topic">
                                    Big/Uncertain/Small (BUS) :
                                </span>
                                <span className="para">
                                    Tasks are categorized into big, uncertain, &
                                    small categories.
                                </span>
                            </li>
                            <li className="list-item2">
                                <span className="topic">T-shirt sizes :</span>
                                <span className="para">
                                    Tasks are categorized into XS, S, M, L, XL
                                    categories.
                                </span>
                            </li>
                            <li className="list-item2">
                                <span className="topic">
                                    Fibonacci Sequence :
                                </span>
                                <span className="para">
                                    Abstract values like : 1, 2, 3, 5, 8, 13,
                                    21, ... are used to represent task
                                    categories. User stories are compared &
                                    assigned story points.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="user-story-wrapper">
                    <div className="user-story">
                        <div className="header">User Story :</div>
                        <ul className="user-story-list">
                            <li className="list-item2">
                                Simple description of a product feature, written
                                from an end user's perspective.
                            </li>
                            <li className="list-item2">
                                Contains Who? What? & Why? of a user story, i.e.
                                :{" "}
                                <span className="italic-def">
                                    As a <span className="underline">Who</span>,
                                    I want a{" "}
                                    <span className="underline">What</span>, so
                                    that I can{" "}
                                    <span className="underline">Why</span> .
                                </span>
                            </li>
                            <li className="list-item2">
                                <div className="sub-header sub-header2">
                                    The 3 C's :
                                </div>
                                <ul className="3c-list">
                                    <li className="list-item3">
                                        <span className="topic">Card :</span>
                                        <span className="para">
                                            Contains user story & it's details
                                            like deadline, acceptance criteria,
                                            etc.
                                        </span>
                                    </li>
                                    <li className="list-item3">
                                        <span className="topic">
                                            Conversation :
                                        </span>
                                        <span className="para">
                                            Happens within development team,
                                            over Card.
                                        </span>
                                    </li>
                                    <li className="list-item3">
                                        <span className="topic">
                                            Confirmation :
                                        </span>
                                        <span className="para">
                                            Happens between development team &
                                            product owner, to match their
                                            understanding of user story along
                                            with target customer needs.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-item2">
                                <div className="sub-header sub-header2">
                                    Good User Story Check (INVEST)
                                </div>
                                <ul className="invest-list">
                                    <li className="list-item3">
                                        <span className="topic">I :</span>
                                        <span className="para">
                                            Independent
                                        </span>
                                    </li>
                                    <li className="list-item3">
                                        <span className="topic">N :</span>
                                        <span className="para">Negotiable</span>
                                    </li>
                                    <li className="list-item3">
                                        <span className="topic">V :</span>
                                        <span className="para">Valuable</span>
                                    </li>
                                    <li className="list-item3">
                                        <span className="topic">E :</span>
                                        <span className="para">
                                            Estimatable
                                        </span>
                                    </li>
                                    <li className="list-item3">
                                        <span className="topic">S :</span>
                                        <span className="para">Small</span>
                                    </li>
                                    <li className="list-item3">
                                        <span className="topic">T :</span>
                                        <span className="para">Testable</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-item2">
                                <span className="topic">
                                    Definition of Ready
                                </span>
                                &nbsp;&&nbsp;
                                <span className="topic">
                                    Definition of Done
                                </span>
                                <span className="para">
                                    are defined for each user-story on a
                                    project-level.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
