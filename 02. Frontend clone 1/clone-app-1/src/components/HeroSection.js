import "./HeroSection.css";
import graph from "../images/graph.jpg";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-left">
                    <h1 className="hero-heading">Hedge Risk to Grow Safely</h1>
                    <p className="hero-para">
                        Aera is the world’s first autonomous, data-driven
                        treasury management protocol.
                    </p>
                    <button className="btn btn-filled">Learn more</button>
                </div>
                <div className="hero-right">
                    <img src={graph} alt="graph" className="graph" />
                </div>
            </div>
        </div>
    );
}
