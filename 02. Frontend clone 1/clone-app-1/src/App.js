import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OfferSection from "./components/OfferSection";
import StrategySection from "./components/StrategySection";

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <StrategySection />
            <OfferSection />
        </div>
    );
}

export default App;
