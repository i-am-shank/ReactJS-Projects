import "./ScrumPage.css";

export default function ScrumPage() {
    return (
        <div className="scrum-page-wrapper">
            <div className="scrum-page">
                <div className="scrum-pillars">
                    <div className="header">3 Scrum Pillars :</div>
                    <ul className="pillars-list">
                        <li className="list-item2">
                            <span className="topic">Transparency :</span>
                            <span className="para">
                                Process should be visible, having a common
                                language, & should have shared understanding of
                                the whole team.
                            </span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Inspection :</span>
                            <span className="para">
                                Progress should be measured at regular
                                intervals, also resolving/avoiding non-desirable
                                issues at the same time.
                            </span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Adaption :</span>
                            <span className="para">
                                Adjust processes, solutions & decisions.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="scrum-values">
                    <div className="header">5 Scrum Values :</div>
                    <ul className="pillars-list">
                        <li className="list-item2">
                            <span className="topic">Openness</span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Focus</span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Courage</span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Commitment</span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Respect</span>
                        </li>
                    </ul>
                </div>

                <div className="scrum-roles">
                    <div className="header">Scrum Roles :</div>
                    <ul className="roles-list">
                        <li className="list-item2">
                            <span className="topic">Product Owner :</span>
                            <span className="para">
                                Takes product decisions, focusing towards
                                maximising the product's value.
                            </span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Development Team :</span>
                            <span className="para">
                                Creates solution of user stories, satisfying
                                customer needs. This team is cross-functional.
                            </span>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Scrum Master :</span>
                            <span className="para">
                                Assists development team in using scrum,
                                removing all roadblocks.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="scrum-terms">
                    <div className="header">Scrum Terms :</div>
                    <ol className="scrum-terms-list">
                        <li className="list-item4">
                            <div className="acceptance-criteria">
                                <div className="sub-header sub-header2">
                                    Acceptance Criteria :
                                </div>
                                <ul className="criteria-list">
                                    <li className="list-item2">
                                        It consists of notes/conditions added to
                                        user story, telling what the user story
                                        must do to satisfy customer's needs.
                                    </li>
                                    <li className="list-item2">
                                        Is defined by the Product owner, in
                                        confirmation phase.
                                    </li>
                                    <li className="list-item2">
                                        <div className="topic">
                                            Acceptance Criteria Requirements :
                                        </div>
                                        <ul className="requirement-list">
                                            <li className="list-item3">
                                                Should be testable with
                                                pass/fail criteria.
                                            </li>
                                            <li className="list-item3">
                                                Should be clear & concise.
                                            </li>
                                            <li className="list-item3">
                                                Should be created with shared
                                                understandings.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-item4">
                            <div className="working-increment">
                                <div className="sub-header sub-header2">
                                    Working Increment :
                                </div>
                                <ul className="increment-list">
                                    <li className="list-item2">
                                        A list of rules, expectations, &
                                        procedures that govern how a team will
                                        work together.
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-item4">
                            <div className="product-increment">
                                <div className="sub-header sub-header2">
                                    Product Increment :
                                </div>
                                <ul className="increment-list">
                                    <li className="list-item2">
                                        A potentially shippable, vertical slice
                                        of a solution that is created as part of
                                        a sprint time-box.
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-item4">
                            <div className="team-velocity">
                                <div className="sub-header sub-header2">
                                    Team Velocity :
                                </div>
                                <ul className="team-velocity-list">
                                    <li className="list-item2">
                                        Team velocity is no. of story points per
                                        sprint, where points are alloted as per
                                        estimation technique used (determining
                                        story point is simple in case of
                                        Fibonacci Sequence).
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-item4">
                            <div className="product-backlog">
                                <div className="sub-header sub-header2">
                                    Product Backlog :
                                </div>
                                <ul className="team-velocity-list">
                                    <li className="list-item2">
                                        User stories which are comitted in
                                        sprint, & stayed incomplete at the end
                                        of the sprint.
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-item4">
                            <div className="burndown-chart">
                                <div className="sub-header sub-header2">
                                    Burn-down Chart :
                                </div>
                                <ul className="burndown-list">
                                    <li className="list-item2">
                                        A visual representation of work being
                                        completed throughout various sprints of
                                        the project.
                                    </li>
                                    <li className="list-item2">
                                        No. of story-points remaining VS
                                        expected no. of story points remaining.
                                    </li>
                                    <li className="list-item2">
                                        Created by Scrum Master.
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="list-item4">
                            <div className="burnup-chart">
                                <div className="sub-header sub-header2">
                                    Burn-up Chart :
                                </div>
                                <ul className="burnup-list">
                                    <li className="list-item2">
                                        No. of sprint-estimated story-points VS
                                        no. of story points completed.
                                    </li>
                                    <li className="list-item2">
                                        Gives better information than Burn-down
                                        chart.
                                    </li>
                                    <li className="list-item2">
                                        Created by Scrum Master.
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
