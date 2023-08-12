import Strategy from "./Strategy";
import { Strategies } from "./Strategies";
import "./StrategySection.css";

export default function StrategySection() {
    return (
        <div className="strategy-section">
            <div className="strategy-section-content">
                <div className="strategy-section-top">
                    <h2 className="strategy-section-heading">
                        All-in-one treasury strategy
                    </h2>
                    <h4 className="strategy-section-subheading">
                        Designed to work in all market scenarios
                    </h4>
                </div>
                <div className="strategy-section-bottom">
                    {Strategies.map((stg) => {
                        return (
                            <Strategy
                                image={stg.image}
                                heading={stg.heading}
                                para={stg.para}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
