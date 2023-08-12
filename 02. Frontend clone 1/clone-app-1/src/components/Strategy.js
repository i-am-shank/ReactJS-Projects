import "./Strategy.css";

export default function Strategy(props) {
    return (
        <div className="strategy">
            <div className="strategy-content">
                <div className="strategy-image">
                    <img
                        src={props.image}
                        alt="strategy-logo"
                        className="strategy-logo"
                    />
                </div>
                <div className="strategy-text">
                    <h1 className="strategy-heading">{props.heading}</h1>
                    <p className="strategy-para">{props.para}</p>
                </div>
            </div>
        </div>
    );
}
