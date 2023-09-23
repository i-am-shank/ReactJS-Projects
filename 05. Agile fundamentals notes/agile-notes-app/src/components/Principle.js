import "./Principle.css";

export default function Principle({ title, content }) {
    return (
        <div className="principle">
            <div className="topic">{title}</div>
            <div className="definition">{content}</div>
        </div>
    );
}
