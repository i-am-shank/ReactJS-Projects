import { Route, Routes } from "react-router-dom";
import "./App.css";

// Components =========================
import HomePage from "./pages/HomePage";
import AgileIntroPage from "./pages/AgileIntroPage";
import ScrumPage from "./pages/ScrumPage";
import KanbanPage from "./pages/KanbanPage";
import ScrumbanPage from "./pages/ScrumbanPage";
import AgileContentPage from "./pages/AgileContentPage";
import AgileTermsPage from "./pages/AgileTermsPage";

function App() {
    return (
        <div className="App">
            {/* Routes ======================== */}
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/introduction" element={<AgileIntroPage />} />
                <Route path="/scrum" element={<ScrumPage />} />
                <Route path="/kanban" element={<KanbanPage />} />
                <Route path="/scrumban" element={<ScrumbanPage />} />
                <Route path="/agileterms" element={<AgileTermsPage />} />
                <Route path="/moredetails" element={<AgileContentPage />} />
            </Routes>
        </div>
    );
}

export default App;
