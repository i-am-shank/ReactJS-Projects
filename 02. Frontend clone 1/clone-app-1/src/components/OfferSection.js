import "./OfferSection.css";

import { OfferDetails } from "./OfferDetails";
import Offer from "./Offer";
import line from "../images/line.svg";

export default function OfferSection() {
    return (
        <div className="offer-section">
            <div className="offer-section-content">
                <div className="offer-section-left">
                    <h1 className="offer-section-heading">
                        Offer a better product with a competitive edge by
                        managing treasury risk.
                    </h1>
                </div>
                <div className="offer-section-center">
                    <img src={line} alt="" />
                </div>
                <div className="offer-section-right">
                    {OfferDetails.map((currOffer) => {
                        return (
                            <Offer
                                heading={currOffer.heading}
                                para={currOffer.para}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
