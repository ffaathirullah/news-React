import React from "react";
import Registrasi from "./pages/Registrasi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import News from "./pages/News";

function App() {
  let auth = localStorage.getItem("user");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Registrasi />} />
        <Route exact path="/login" element={<Login />} />
        {/* {auth === "holaaa" ? ( */}
        <Route exact path="/news" element={<News />} />
        {/* ) : null} */}
      </Routes>
    </Router>
  );
}

export default App;
