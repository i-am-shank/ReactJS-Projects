import "./BarSoapsSection.css";

import Navigation from "../components/Navigation";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import homebg1 from "../assets/home-bg1.png";

export default function BarSoapsSection() {
    return (
        <div className="barSoaps-section">
            <Navigation /> <br />
            <div className="barSoaps-content">
                {/* <div className="barSoaps-bg">
                    <img src={homebg1} alt="" className="barSoaps-bg-img" />
                </div> */}
                <div className="barSoaps-text-wrapper">
                    <div className="barSoaps-text">
                        <div className="barSoaps-text-left">
                            <span className="aesop-title">Aēsop</span>
                            <sub className="copyright">
                                <CopyrightIcon sx={{ fontSize: "0.3rem" }} />
                            </sub>
                        </div>
                        <div className="barSoaps-text-right">
                            <div className="soap-sub-title">Bar Soaps</div>
                            <div className="soap-title">
                                A body care classic, reimagined
                            </div>
                            <div className="soap-para">
                                Breathing new life into the humble bar soap are
                                Nurture, Polish and Refresh—three additions to
                                the range, each imparting a unique constellation
                                of benefits. 
                            </div>
                            <div className="btn-wrapper">
                                <button className="soap-btn">
                                    <div className="soap-btn-content">
                                        <span className="soap-btn-text">
                                            Discover Bar Soaps
                                        </span>
                                        <span className="soap-btn-icon">
                                            <ArrowForwardIcon />
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
