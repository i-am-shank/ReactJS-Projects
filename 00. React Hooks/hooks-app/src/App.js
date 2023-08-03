import "./App.css";

// React Router -------------------
import { Routes, Route } from "react-router-dom";

// Pages -------------------------
import UseStatePage from "./hookPages/UseStatePage";
import UseEffectPage from "./hookPages/UseEffectPage";
import UseRefPage from "./hookPages/UseRefPage";
import UseContextPage from "./hookPages/UseContextPage";
import UseReducerPage from "./hookPages/UseReducerPage";
import HomePage from "./hookPages/HomePage";
import HooksIntro from "./hookPages/HooksIntro";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/introduction" element={<HooksIntro />} />
                <Route path="/usestate" element={<UseStatePage />} />
                <Route path="/useeffect" element={<UseEffectPage />} />
                <Route path="/useref" element={<UseRefPage />} />
                <Route path="/usecontext" element={<UseContextPage />} />
                <Route path="/usereducer" element={<UseReducerPage />} />
            </Routes>
        </div>
    );
}

export default App;
