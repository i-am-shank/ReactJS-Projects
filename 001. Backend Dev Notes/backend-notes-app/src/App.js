import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Introduction from "./pages/Introduction";
import ServerCreation from "./pages/ServerCreation";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/server-creation" element={<ServerCreation />} />
            </Routes>
        </div>
    );
}

export default App;
