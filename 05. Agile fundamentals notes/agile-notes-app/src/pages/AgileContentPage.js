import "./AgileContentPage.css";

export default function AgileContentPage() {
    return (
        <div className="agile-content-wrapper">
            <div className="agile-content">
                <div className="agile-challenges">
                    <div className="header">Challenges in Agile :</div>
                    <ul className="challenges-list">
                        <li className="list-item2">
                            High cost to switch from an another methodology.
                        </li>
                        <li className="list-item2">
                            Not having documentation. Due to this, other teams
                            can face difficulty in working on a software
                            developed by an another team.
                        </li>
                        <li className="list-item2">
                            Reusability issue due to lack of documentation. If a
                            feature is documented, it can be reused later if
                            needed.
                        </li>
                        <li className="list-item2">
                            No clear role defined in the team. Whole team works
                            together on a project. So if anything goes wrong,
                            there might be lack of someone taking
                            responsibility.
                        </li>
                    </ul>
                </div>

                <div className="agile-roles">
                    <div className="header">Other Agile Roles :</div>
                    <ul className="roles-list">
                        <li className="list-item4">
                            <div className="sub-header sub-header2">
                                Project Sponsor :
                            </div>
                            <div className="definition">
                                Does budgeting for the project, & also keeps
                                analysing project's return value.
                            </div>
                        </li>
                        <li className="list-item4">
                            <div className="sub-header sub-header2">
                                Business Leaders :
                            </div>
                            <div className="definition">
                                Any type of business management, or leadership
                                roles, executives on the business side.
                            </div>
                        </li>
                        <li className="list-item4">
                            <div className="sub-header sub-header2">
                                Subject Matter Expert / Senior User :
                            </div>
                            <div className="definition">
                                They understand the technology, processes, &
                                they assist in getting it as output by giving
                                feedback.
                            </div>
                        </li>
                        <li className="list-item4">
                            <div className="sub-header sub-header2">
                                Business Users
                            </div>
                            <div className="definition">
                                New users or users that are junior to senior
                                users. They indirectly give feedback through
                                Senior users.
                            </div>
                        </li>
                        <li className="list-item4">
                            <div className="sub-header sub-header2">
                                Technology Leaders
                            </div>
                            <div className="definition">
                                Managers of technology, IT managers, or
                                supervisors, or executives in the IT/technology
                                side.
                            </div>
                        </li>
                        <li className="list-item4">
                            <div className="sub-header sub-header2">
                                Agile Coach
                            </div>
                            <div className="definition">
                                Experienced agile practitioners. Trains, guides
                                & supports an organisation in following Agile.
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="agile-detractors">
                    <div className="header">
                        Agile Detractors -- Leadership Roles
                    </div>
                    <ul className="leadership-list">
                        <li className="list-item2">
                            Demands mid-sprint changes.
                        </li>
                        <li className="list-item2">
                            Hijack ceremonies for high priority topics.
                        </li>
                        <li className="list-item2">
                            Unavailable for demos/sprint reviews.
                        </li>
                        <li className="list-item2">
                            Discourages inter-team communication.
                        </li>
                        <li className="list-item2">
                            Changes available resources in mid-project phase.
                        </li>
                        <li className="list-item2">
                            Doesn't value Agile mindset.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
