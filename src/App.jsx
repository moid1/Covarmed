// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./page/login";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
