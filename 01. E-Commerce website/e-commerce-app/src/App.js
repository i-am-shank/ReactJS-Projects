import React from "react";
import "./App.css";

// Pages ---------------------
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";

// React-Router ---------------------
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/checkout" element={<CheckoutPage />} />

                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
