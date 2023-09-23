import "./ScrumbanPage.css";

export default function ScrumbanPage() {
    return (
        <div className="scrumban-wrapper">
            <div className="scrumban">
                <div className="definition-wrapper">
                    <div className="header">Scrumban</div>
                    <ul className="definition-list">
                        <li className="list-item2">
                            Scrumban is also an agile framework.
                        </li>
                        <li className="list-item2">
                            It uses some points of both the previous frameworks,
                            i.e. Scrum & Kanban.
                        </li>
                        <li className="list-item2">
                            Due to this fusion, there also arises some
                            contradicting points like: to timebox (Scrum) / not
                            to timebox (Kanban). For these, organises choose
                            according to their needs.
                        </li>
                    </ul>
                </div>

                <div className="scrumban-values">
                    <div className="header">Values of Scrumban :</div>
                    <ul className="scrumban-list">
                        <li className="list-item2">
                            Visualize workflow with a Kanban board. (
                            <span className="topic">Kanban</span>)
                        </li>
                        <li className="list-item2">
                            Utilizes daily scrum. (
                            <span className="topic">Scrum</span>)
                        </li>
                        <li className="list-item2">
                            Work is pulled rather than assigned. (
                            <span className="topic">Kanban</span>)
                        </li>
                        <li className="list-item2">
                            Strict work in progress (WIP) limits. (
                            <span className="topic">Kanban</span>)
                        </li>
                        <li className="list-item2">
                            Project team roles not clearly specified. (
                            <span className="topic">Kanban</span>)
                        </li>
                        <li className="list-item2">
                            Specialized team members. (
                            <span className="topic">Kanban</span>)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
