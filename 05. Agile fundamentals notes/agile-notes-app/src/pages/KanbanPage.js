import "./KanbanPage.css";

export default function KanbanPage() {
    return (
        <div className="kanban-wrapper">
            <div className="kanban">
                <div className="kanban-definition">
                    <div className="header">Kanban</div>
                    <ul className="definition-list">
                        <li className="list-item2">
                            Kanban is an Agile framework, created after Scrum.
                        </li>
                        <li className="list-item2">
                            It focuses on :
                            <ul className="kanban-list">
                                <li className="list-item3">
                                    Providing early & consistent value.
                                </li>
                                <li className="list-item3">
                                    Having collaborative & self-managing teams.
                                </li>
                            </ul>
                        </li>
                        <li className="list-item2">
                            <span className="topic">Kanban boards</span>{" "}
                            (physical/virtual) are used to implement this
                            framework. Virtually platforms like Jira & Trello
                            are used for it.
                        </li>
                    </ul>
                    <div className="definition"></div>
                </div>

                <div className="kanban-principles">
                    <div className="sub-header">4 Principles of Kanban :</div>
                    <ul className="principles-list">
                        <li className="list-item2">
                            Start with what you do now.
                        </li>
                        <li className="list-item2">
                            Agree to pursue incremental change.
                        </li>
                        <li className="list-item2">
                            Respect current process, roles, responsibilities,
                            titles.
                        </li>
                        <li className="list-item2">
                            Encourage acts of leadership at all levels.
                        </li>
                    </ul>
                </div>

                <div className="kanban-practices">
                    <div className="sub-header">
                        6 General Practices of Kanban :
                    </div>
                    <ul className="practices-list">
                        <li className="list-item2">Visualize the workflow.</li>
                        <li className="list-item2">
                            Limit work in progress (WIP). Stop starting, start
                            finishing.
                        </li>
                        <li className="list-item2">Manage flow of tasks.</li>
                        <li className="list-item2">Make policies explicit</li>
                        <li className="list-item2">Implement feedback loops</li>
                        <li className="list-item2">
                            Collaborate for improvement, evolve experimentally.
                        </li>
                    </ul>
                </div>

                <div className="kanban-key-metrics">
                    <div className="sub-header sub-header2">
                        Kanban Key Metrics :
                    </div>
                    <ul className="metrics-list">
                        <li className="list-item4">
                            <span className="topic">Lead time :</span>
                            <span className="para">
                                Duration between task creation time & Task
                                live(i.e. done).
                            </span>
                        </li>
                        <li className="list-item4">
                            <span className="topic">Cycle time :</span>
                            <span className="para">
                                Duration between task start time & task live.
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="kanban-swimlanes">
                    <div className="sub-header sub-header2">
                        Kanban Swimlanes
                    </div>
                    <div className="definition">
                        Swimlanes in Kanban are utilised to group tasks
                        together, based on priority, department, etc.
                    </div>
                </div>

                <div className="kanban-steps">
                    <div className="sub-header sub-header2">
                        Steps to implement Kanban :
                    </div>
                    <ul className="steps-list">
                        <li className="list-item2">Visualize your work</li>
                        <li className="list-item2">
                            Limit Work in Progress (WIP).
                        </li>
                        <li className="list-item2">
                            Adapt, monitor, & improve.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
