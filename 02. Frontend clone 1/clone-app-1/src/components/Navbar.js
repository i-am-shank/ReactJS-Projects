import "./Navbar.css";
import aeralogo from "../images/aeralogo.svg";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="content">
                <div className="nav-left">
                    <img src={aeralogo} alt="logo" className="logo" />
                </div>
                <div className="nav-right">
                    <p>Product</p>
                    <p>Mission</p>
                    <div className="nav-item">
                        <p>Docs</p>
                        <div className="down-arrow">⌄</div>
                    </div>
                    <button className="btn btn-empty">Launch app</button>
                </div>
            </div>
        </div>
    );
}
