import "./Offer.css";
import bullet from "../images/bullet.svg";

export default function Offer(props) {
    return (
        <div className="offer">
            <div className="offer-container">
                <div className="bullet">
                    <img src={bullet} alt="-> " />
                </div>
                <div className="offer-content">
                    <div className="offer-heading">{props.heading}</div>
                    <div className="offer-para">{props.para}</div>
                </div>
            </div>
        </div>
    );
}
