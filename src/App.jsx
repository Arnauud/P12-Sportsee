import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Accueil from './pages/accueil/accueil';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect to /userId/12 if no userId is provided */}
        <Route path="/" element={<Navigate to="/userId/12" />} />
        {/* Route for Accueil with a dynamic userId */}
        <Route path="/userId/:userId" element={<Accueil />} />
      </Routes>
    </Router>
  );
}

export default App;
